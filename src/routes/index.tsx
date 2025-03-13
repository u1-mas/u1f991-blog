import { Route, Routes } from "react-router-dom"
import { BlogList } from "../components/BlogList"
import { BlogPostDetail } from "../components/BlogPostDetail"
import { Home } from "../components/Home"
import { Layout } from "../components/Layout"
import { NotFound } from "../components/NotFound"
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
                element: <Home />,
            },
            {
                path: "blog",
                element: <BlogList contents={{}} />, // 実際の使用時にcontentsを渡すのだ
            },
            {
                path: "blog/:id",
                element: <BlogPostDetail contents={{}} />, // 実際の使用時にcontentsを渡すのだ
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]

interface RoutesProps {
    contents: Record<string, BlogPost>
}

export function AppRoutes({ contents }: RoutesProps) {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<BlogList contents={contents} />} />
                <Route
                    path="blog/:id"
                    element={<BlogPostDetail contents={contents} />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
