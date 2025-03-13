import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-100 dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
                <Navigation />
            </header>
            <main className="flex-1 px-8 py-8 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
