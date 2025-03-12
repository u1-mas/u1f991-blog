import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export function Layout() {
    return (
        <div className="layout">
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
