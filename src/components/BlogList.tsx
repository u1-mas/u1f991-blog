import { useNavigate } from "react-router-dom"
import type { BlogPost } from "../types/BlogPost"

interface BlogListProps {
    contents: Record<string, BlogPost>
}

export function BlogList({ contents }: BlogListProps) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-4">
            {Object.entries(contents).map(([key, { attributes }]) => {
                const filename = key.split("/").pop()?.split(".")[0]
                return (
                    <button
                        key={filename}
                        type="button"
                        id={`blog-${filename}`}
                        onClick={() => navigate(`/posts/${filename}`)}
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:-translate-y-0.5 text-left text-base"
                    >
                        {attributes?.title}
                    </button>
                )
            })}
        </div>
    )
}
