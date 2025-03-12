import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Tech Blog</h1>
            <p className="text-lg mb-4">
                技術的な発見や学びをシェアする場所です。日々の開発で得た知識や、
                興味深い技術的なトピックについて発信していきます。
            </p>
            <div className="mt-8">
                <Link
                    to="/blog"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    ブログを見る
                </Link>
            </div>
        </div>
    )
}
