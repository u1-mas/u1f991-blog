import { useParams } from "react-router-dom";
import type { BlogPost } from "../types/BlogPost";

interface BlogPostDetailProps {
    contents: Record<string, BlogPost>;
}

const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export function BlogPostDetail({ contents }: BlogPostDetailProps) {
    const { id } = useParams();
    const post = Object.entries(contents).find(
        ([key]) => key === `./contents/${id}.md`,
    )?.[1];

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-600">
                <h2 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h2>
                <p>お探しの記事は存在しないか、削除された可能性があります。</p>
            </div>
        );
    }

    const PostContent = post.ReactComponent;
    const { attributes } = post;
    const createdAt = formatDate(attributes?.createdAt);
    const updatedAt = formatDate(attributes?.updatedAt);

    return (
        <div className="article-container">
            <article className="article-paper">
                <header className="article-header">
                    <h1 className="article-title">{attributes?.title}</h1>
                    {attributes?.description && (
                        <p className="article-description">{attributes.description}</p>
                    )}
                    <div className="article-meta">
                        <div className="blog-card-tags">
                            {attributes?.tags?.map((tag) => (
                                <span key={tag} className="blog-card-tag">
                                    {tag}
                                </span>
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
            </article>
        </div>
    );
}
