import { formatInTimeZone } from "date-fns-tz"
import Masonry from "react-masonry-css"
import { useNavigate, useSearchParams } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"
import { TagList } from "./TagList"

interface BlogListProps {
    contents: Record<string, BlogPost>
}

export function BlogList({ contents }: BlogListProps) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const activeTag = searchParams.get("tag") || undefined

    const allTags = Array.from(
        new Set(
            Object.values(contents)
                .flatMap((post) => post.attributes?.tags || [])
                .filter(Boolean),
        ),
    )

    const filteredContents = Object.entries(contents).filter(
        ([, post]) =>
            !activeTag || post.attributes?.tags?.includes(activeTag),
    )

    return (
        <div className="space-y-8">
            <TagList tags={allTags} activeTag={activeTag} />
            <Masonry
                breakpointCols={{
                    default: 6,
                    1536: 5,
                    1280: 4,
                    1024: 3,
                    768: 2,
                    640: 1,
                }}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {filteredContents.map(([key, { attributes }]) => {
                    const filename = key.split("/").pop()?.split(".")[0]
                    return (
                        <button
                            key={filename}
                            type="button"
                            id={`blog-${filename}`}
                            onClick={() => navigate(`/blog/${filename}`)}
                            className="blog-card"
                        >
                            <div className="blog-card-content">
                                <h2 className="blog-card-title">
                                    {attributes?.title}
                                </h2>
                                {attributes?.tags && (
                                    <div className="blog-card-tags">
                                        {attributes.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="blog-card-tag"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {(attributes?.createdAt ||
                                    attributes?.updatedAt) && (
                                    <div className="blog-card-dates">
                                        {attributes.createdAt && (
                                            <time
                                                dateTime={attributes.createdAt}
                                                className="blog-card-date"
                                            >
                                                作成:{" "}
                                                {formatInTimeZone(
                                                    new Date(
                                                        attributes.createdAt,
                                                    ),
                                                    "Asia/Tokyo",
                                                    "yyyy/MM/dd",
                                                )}
                                            </time>
                                        )}
                                        {attributes.updatedAt &&
                                            attributes.updatedAt !==
                                                attributes.createdAt && (
                                                <time
                                                    dateTime={
                                                        attributes.updatedAt
                                                    }
                                                    className="blog-card-date"
                                                >
                                                    更新:{" "}
                                                    {formatInTimeZone(
                                                        new Date(
                                                            attributes.updatedAt,
                                                        ),
                                                        "Asia/Tokyo",
                                                        "yyyy/MM/dd",
                                                    )}
                                                </time>
                                            )}
                                    </div>
                                )}
                            </div>
                        </button>
                    )
                })}
            </Masonry>
        </div>
    )
}
