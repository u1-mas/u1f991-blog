export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                ページが見つかりませんでした
            </h2>
            <p className="text-gray-500 mb-8">
                お探しのページは存在しないか、移動した可能性があります。
            </p>
            <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                前のページに戻る
            </button>
        </div>
    )
}
