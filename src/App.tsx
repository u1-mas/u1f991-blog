import { useState } from "react"
import { loadContent } from "./loadContent"
import { AppRoutes } from "./routes"
import type { BlogPost } from "./types/BlogPost"

function App() {
    const [contents] = useState<Record<string, number>>(loadContent())
    return <AppRoutes contents={contents} />
}

export default App
