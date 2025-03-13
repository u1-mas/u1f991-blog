import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem-4rem)] bg-gray-100">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                ページが見つかりませんでした
            </h2>
            <p className="text-gray-500 mb-8">
                お探しのページは存在しないか、移動した可能性があります。
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                ホームに戻る
            </Link>
        </div>
    )
}
