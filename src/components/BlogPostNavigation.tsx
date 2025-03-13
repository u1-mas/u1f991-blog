import type { FC } from "react"
import { Link } from "react-router-dom"
import type { BlogNavigation } from "../utils/blogNavigation"

interface BlogPostNavigationProps {
    navigation: BlogNavigation
}

export const BlogPostNavigation: FC<BlogPostNavigationProps> = ({ navigation }) => {
    if (!navigation.prev && !navigation.next) return null

    return (
        <nav className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div>
                {navigation.prev && (
                    <Link
                        to={`/blog/${navigation.prev.id}`}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        <span>←</span>
                        <div className="flex flex-col">
                            <span className="text-sm">前の記事</span>
                            <span className="text-lg font-medium">{navigation.prev.title}</span>
                        </div>
                    </Link>
                )}
            </div>
            <div>
                {navigation.next && (
                    <Link
                        to={`/blog/${navigation.next.id}`}
                        className="flex items-center gap-2 text-right text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm">次の記事</span>
                            <span className="text-lg font-medium">{navigation.next.title}</span>
                        </div>
                        <span>→</span>
                    </Link>
                )}
            </div>
        </nav>
    )
}
