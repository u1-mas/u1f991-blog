import { useEffect, useState } from "react"
import "./App.css"
import { loadContent } from "./loadContent"
import type { BlogPost } from "./types/BlogPost"

function App() {
    const [contents, setContents] = useState<Record<string, BlogPost> | null>(
        null,
    )
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const rawContents = loadContent()
        setContents(rawContents)
        setLoading(false)
    }, [])

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            loaded!
            {contents &&
                Object.entries(contents).map(([key, { attributes }]) => {
                    // console.log(key, value)
                    return <div key={key}>{attributes?.title}</div>
                })}
        </div>
    )
}

export default App
