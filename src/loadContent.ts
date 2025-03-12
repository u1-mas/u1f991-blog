import type { BlogPost } from "./types/BlogPost"

interface GitDates {
    createdAt: string
    updatedAt: string
}

declare const gitDates: Record<string, GitDates>

export function loadContent(): Record<string, BlogPost> {
    const contents = import.meta.glob<BlogPost>("./contents/*.md", {
        eager: true,
    })

    for (const [path, content] of Object.entries(contents)) {
        const relativePath = path.replace("./", "")
        const dates = gitDates[relativePath] || {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        if (content.attributes) {
            content.attributes.createdAt = dates.createdAt
            content.attributes.updatedAt = dates.updatedAt
        } else {
            content.attributes = dates
        }
    }

    return contents
}
