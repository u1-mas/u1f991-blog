import { useParams } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"

interface BlogPostDetailProps {
    contents: Record<string, BlogPost>
}

export function BlogPostDetail({ contents }: BlogPostDetailProps) {
    const { id } = useParams()
    const post = Object.entries(contents).find(
        ([key]) => key.split("/").pop()?.split(".")[0] === id,
    )?.[1]

    if (!post) {
        return <div>記事が見つかりませんでした。</div>
    }

    const PostContent = post.ReactComponent

    return (
        <article>
            <h1>{post.attributes?.title}</h1>
            <PostContent />
        </article>
    )
}
