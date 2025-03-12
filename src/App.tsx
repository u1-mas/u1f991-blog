import { useState } from "react"
import { AppRoutes } from "./routes"
import "./App.css"
import { loadContent } from "./loadContent"
import type { BlogPost } from "./types/BlogPost"

function App() {
    const [contents] = useState<Record<string, BlogPost>>(loadContent())
    return <AppRoutes contents={contents} />
}

export default App
