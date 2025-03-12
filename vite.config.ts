import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { Mode, plugin as markdown } from "vite-plugin-markdown"
import { gitDatesPlugin } from "./vite-plugin-git-dates"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
        markdown({
            mode: [Mode.REACT],
        }),
        gitDatesPlugin(),
    ],
    base: "/u1f991-blog/",
})
