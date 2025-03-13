import { Link, useParams } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"
import { getBlogNavigation } from "../utils/blogNavigation"
import { BlogPostNavigation } from "./BlogPostNavigation"
import { NotFound } from "./NotFound"

interface BlogPostDetailProps {
    contents: Record<string, BlogPost>
}

const formatDate = (dateString?: string) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export function BlogPostDetail({ contents }: BlogPostDetailProps) {
    const { id } = useParams()
    const post = Object.entries(contents).find(
        ([key]) => key === `./contents/${id}.md`,
    )?.[1]

    if (!post) {
        return <NotFound />
    }

    const PostContent = post.ReactComponent
    const { attributes } = post
    const createdAt = formatDate(attributes?.createdAt)
    const updatedAt = formatDate(attributes?.updatedAt)

    return (
        <div className="article-container">
            <article className="article-paper">
                <header className="article-header">
                    <h1 className="article-title">{attributes?.title}</h1>
                    {attributes?.description && (
                        <p className="article-description">
                            {attributes.description}
                        </p>
                    )}
                    <div className="article-meta">
                        <div className="blog-card-tags">
                            {attributes?.tags?.map((tag) => (
                                <Link
                                    key={tag}
                                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                                    className="blog-card-tag hover:bg-blue-500 hover:text-white cursor-pointer underline-offset-2 hover:underline transition-colors"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                        <div className="article-dates">
                            {createdAt && (
                                <time className="article-date">
                                    作成日: {createdAt}
                                </time>
                            )}
                            {updatedAt && (
                                <time className="article-date">
                                    更新日: {updatedAt}
                                </time>
                            )}
                        </div>
                    </div>
                </header>
                <div className="article-content markdown">
                    <PostContent />
                </div>
                <BlogPostNavigation
                    navigation={getBlogNavigation(
                        contents,
                        `./contents/${id}.md`,
                    )}
                />
            </article>
        </div>
    )
}
