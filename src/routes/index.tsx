import { Routes, Route } from "react-router-dom"
import { BlogList } from "../components/BlogList"
import { BlogPostDetail } from "../components/BlogPostDetail"
import { Layout } from "../components/Layout"
import type { BlogPost } from "../types/BlogPost"

interface RouteConfig {
    path: string
    element: React.ReactNode
    children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <BlogList contents={{}} /> // 実際の使用時にcontentsを渡すのだ
            },
            {
                path: "/posts/:id",
                element: <BlogPostDetail contents={{}} /> // 実際の使用時にcontentsを渡すのだ
            }
        ]
    }
]

interface RoutesProps {
    contents: Record<string, BlogPost>
}

export function AppRoutes({ contents }: RoutesProps) {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<BlogList contents={contents} />} />
                <Route
                    path="posts/:id"
                    element={<BlogPostDetail contents={contents} />}
                />
            </Route>
        </Routes>
    )
}
