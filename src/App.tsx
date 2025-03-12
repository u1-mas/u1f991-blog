import { useEffect, useState } from "react"
import "./App.css"
import { loadContent } from "./loadContent"
import type { BlogPost } from "./types/BlogPost"

function App() {
    const [contents, setContents] = useState<Record<string, BlogPost>>(
        loadContent(),
    )

    return (
        <div className="button-container">
            {Object.entries(contents).map(([key, { attributes }]) => {
                console.log(key, attributes)
                const filename = key.split("/").pop()?.split(".")[0]
                return (
                    <button
                        key={filename}
                        type="button"
                        id={`blog-${filename}`}
                    >
                        {attributes?.title}
                    </button>
                )
            })}
        </div>
    )
}

export default App
