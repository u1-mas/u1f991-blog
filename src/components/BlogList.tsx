import Masonry from "react-masonry-css"
import { useNavigate } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"

interface BlogListProps {
    contents: Record<string, BlogPost>
}

export function BlogList({ contents }: BlogListProps) {
    const navigate = useNavigate()

    return (
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
            {Object.entries(contents).map(([key, { attributes }]) => {
                const filename = key.split("/").pop()?.split(".")[0]
                return (
                    <button
                        key={filename}
                        type="button"
                        id={`blog-${filename}`}
                        onClick={() => navigate(`/blog/${filename}`)}
                        className="blog-card"
                    >
                        {attributes?.title}
                    </button>
                )
            })}
        </Masonry>
    )
}
