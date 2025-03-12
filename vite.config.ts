import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { Mode, plugin as markdown } from "vite-plugin-markdown";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
        markdown({
            mode: [Mode.REACT],
        }),
    ],
    base: "/u1f991-blog/",
});
