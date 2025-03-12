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
        <nav className="max-w-7xl mx-auto px-8">
            <ul className="flex gap-8 list-none p-0 m-0">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link 
                            to={item.path} 
                            className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
