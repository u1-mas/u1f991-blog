import { useNavigate } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"

interface BlogListProps {
    contents: Record<string, BlogPost>
}

export function BlogList({ contents }: BlogListProps) {
    const navigate = useNavigate()

    return (
        <div className="button-container">
            {Object.entries(contents).map(([key, { attributes }]) => {
                const filename = key.split("/").pop()?.split(".")[0]
                return (
                    <button
                        key={filename}
                        type="button"
                        id={`blog-${filename}`}
                        onClick={() => navigate(`/posts/${filename}`)}
                    >
                        {attributes?.title}
                    </button>
                )
            })}
        </div>
    )
}
