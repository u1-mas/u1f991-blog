import type { FC } from "react"
import { Link } from "react-router-dom"

interface TagListProps {
    tags: string[]
    activeTag?: string
    className?: string
}

export const TagList: FC<TagListProps> = ({ tags, activeTag, className = "" }) => {
    const uniqueTags = Array.from(new Set(tags)).sort()

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Link
                to="/"
                className={`px-3 py-1 rounded-full text-sm ${
                    !activeTag
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
            >
                すべて
            </Link>
            {uniqueTags.map((tag) => (
                <Link
                    key={tag}
                    to={`/?tag=${encodeURIComponent(tag)}`}
                    className={`px-3 py-1 rounded-full text-sm ${
                        activeTag === tag
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                >
                    {tag}
                </Link>
            ))}
        </div>
    )
}
