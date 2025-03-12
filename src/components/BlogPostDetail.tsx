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
        <article className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{attributes?.title}</h1>
                {attributes?.description && (
                    <p className="text-xl text-gray-600 mb-4">{attributes.description}</p>
                )}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="blog-card-tags">
                        {attributes?.tags?.map((tag) => (
                            <span key={tag} className="blog-card-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="blog-card-dates">
                        {createdAt && (
                            <time className="blog-card-date">
                                作成日: {createdAt}
                            </time>
                        )}
                        {updatedAt && (
                            <time className="blog-card-date">
                                更新日: {updatedAt}
                            </time>
                        )}
                    </div>
                </div>
            </header>
            <div className="markdown mt-8">
                <PostContent />
            </div>
        </article>
    );
}
