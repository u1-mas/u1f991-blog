import type { BlogPost } from "./types/BlogPost"

export function loadContent(): Record<string, BlogPost> {
    const contents = import.meta.glob<BlogPost>("./contents/*.md", {
        eager: true,
    })
    return contents
}
