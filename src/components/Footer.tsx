import type { FC } from "react"

export const Footer: FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-4">
                <div className="flex gap-4">
                    <a
                        href="https://github.com/u1-mas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://twitter.com/u1f991"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        X (Twitter)
                    </a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} u1f991-blog. All rights
                    reserved.
                </p>
            </div>
        </footer>
    )
}
