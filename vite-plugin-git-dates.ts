import { execSync } from "node:child_process"
import type { Plugin } from "vite"

interface GitDates {
    createdAt: string
    updatedAt: string
}

export function gitDatesPlugin(): Plugin {
    const fileGitDates = new Map<string, GitDates>()

    return {
        name: "vite-plugin-git-dates",
        configureServer() {
            // ビルド時にGitの日時情報を取得
            const files = execSync("git ls-files src/contents")
                .toString()
                .trim()
                .split("\n")
            for (const file of files) {
                try {
                    const createdAt = execSync(
                        `git log --format=%aI --reverse ${file} | head -1`,
                        { encoding: "utf-8" },
                    ).trim()

                    const updatedAt = execSync(
                        `git log -1 --format=%aI ${file}`,
                        { encoding: "utf-8" },
                    ).trim()

                    fileGitDates.set(file, { createdAt, updatedAt })
                } catch (error) {
                    console.error(`Failed to get git dates for ${file}:`, error)
                    const now = new Date().toISOString()
                    fileGitDates.set(file, { createdAt: now, updatedAt: now })
                }
            }
        },
        transform(code, id) {
            if (id.includes("loadContent.ts")) {
                const dates = Object.fromEntries([...fileGitDates.entries()])
                return code.replace(
                    "export function loadContent()",
                    `const gitDates = ${JSON.stringify(dates, null, 2)};\n\nexport function loadContent()`,
                )
            }
        },
    }
}
