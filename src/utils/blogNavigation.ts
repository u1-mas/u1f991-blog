import type { BlogPost } from "../types/BlogPost"

interface NavigationPost {
    id: string
    title: string
}

export interface BlogNavigation {
    prev: NavigationPost | null
    next: NavigationPost | null
}

export function getBlogNavigation(
    contents: Record<string, BlogPost>,
    currentPostPath: string,
): BlogNavigation {
    // 投稿を日付順にソート
    const sortedPosts = Object.entries(contents)
        .map(([path, post]) => ({
            path,
            createdAt: post.attributes?.createdAt || "",
        }))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

    // 現在の投稿のインデックスを取得
    const currentIndex = sortedPosts.findIndex(
        (post) => post.path === currentPostPath,
    )

    if (currentIndex === -1) {
        return { prev: null, next: null }
    }

    // 前後の投稿を取得
    const prev =
        currentIndex < sortedPosts.length - 1
            ? {
                  id: sortedPosts[currentIndex + 1].path
                      .split("/")
                      .pop()
                      ?.split(".")[0] || "",
                  title:
                      contents[sortedPosts[currentIndex + 1].path].attributes
                          ?.title || "無題",
              }
            : null

    const next =
        currentIndex > 0
            ? {
                  id: sortedPosts[currentIndex - 1].path
                      .split("/")
                      .pop()
                      ?.split(".")[0] || "",
                  title:
                      contents[sortedPosts[currentIndex - 1].path].attributes
                          ?.title || "無題",
              }
            : null

    return { prev, next }
}
