import { Link } from "react-router-dom"

interface NavItem {
    path: string
    label: string
}

const navItems: NavItem[] = [
    { path: "/", label: "ホーム" },
    { path: "/blog", label: "ブログ" },
    // 将来的に他のコンテンツを追加する時はここに追加するのだ
    // { path: "/about", label: "About" },
    // { path: "/projects", label: "Projects" },
]

export function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
