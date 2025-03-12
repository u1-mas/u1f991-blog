import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { BlogPostDetail } from "./components/BlogPostDetail"
import "./App.css"
import { loadContent } from "./loadContent"
import type { BlogPost } from "./types/BlogPost"

function BlogList({ contents }: { contents: Record<string, BlogPost> }) {
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

function App() {
    const [contents] = useState<Record<string, BlogPost>>(loadContent())

    return (
        <Routes>
            <Route path="/" element={<BlogList contents={contents} />} />
            <Route
                path="/posts/:id"
                element={<BlogPostDetail contents={contents} />}
            />
        </Routes>
    )
}

export default App
