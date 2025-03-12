# 技術コンテキスト

## 開発環境

### 必要条件
- Node.js（最新のLTS版を推奨）
- npm（Node.jsに同梱）

### セットアップ手順
1. リポジトリのクローン
   ```bash
   git clone https://github.com/u1-mas/u1f991-blog.git
   cd u1f991-blog
   ```

2. 依存関係のインストール
   ```bash
   npm install
   ```

3. 開発サーバーの起動
   ```bash
   npm run dev
   ```

## 技術スタック

### コア技術
- **React** (v19.0.0)
  - モダンなUIライブラリ
  - 関数コンポーネントとHooksベースの実装

- **TailwindCSS** (v4.0.13)
  - ユーティリティファーストのCSSフレームワーク
  - ダークモード対応
  - カスタマイズ可能なデザインシステム

- **TypeScript** (v5.7.2)
  - 静的型チェック
  - 開発時の型安全性確保

- **Vite** (v6.2.0)
  - 高速な開発サーバー
  - 効率的なビルドプロセス
  - プラグインによる拡張性

### Markdownサポート
- **vite-plugin-markdown** (v2.2.0)
  - マークダウンファイルのインポート
  - Front Matterのパース
  - Reactコンポーネントへの変換

### 開発ツール
- **Biome** (v1.9.4)
  - コードフォーマット
  - リント
  - 一貫したコードスタイルの維持

- **Husky** (v9.1.7)
  - Gitフック管理
  - コミット前の自動チェック

- **lint-staged** (v15.4.3)
  - ステージングされたファイルのみに対するリント実行

### ビルド/バンドル
- **@vitejs/plugin-react-swc** (v3.8.0)
  - SWCによる高速なReactコードのトランスパイル

- **@babel/core** (v7.26.9), **@babel/preset-react** (v7.26.3)
  - Reactコードのトランスパイル
  - JSX変換

## スクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバーの起動 |
| `npm run build` | プロダクションビルドの生成 |
| `npm run check` | 型チェックとコードフォーマット |
| `npm run preview` | ビルド結果のプレビュー |

## 技術的制約

### パフォーマンス
- ビルド時に全マークダウンファイルを静的に解析
- クライアントサイドでの動的なマークダウン解析は不可

### ブラウザサポート
- モダンブラウザ（Chrome, Firefox, Safari, Edge最新版）
- IE非対応

### セキュリティ
- マークダウンコンテンツは信頼済みソースのみ
- クライアントサイドでの動的コンテンツ実行は制限

## 依存関係管理

### 本番環境
```json
{
    "@babel/core": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.13"
}
```

### 開発環境
```json
{
    "@biomejs/biome": "^1.9.4",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react-swc": "^3.8.0",
    "husky": "^9.1.7",
    "lint-staged": "^15.4.3",
    "typescript": "~5.7.2",
    "vite": "^6.2.0",
    "vite-plugin-markdown": "^2.2.0",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.18"
}
```

## デプロイメント

### ビルドプロセス
1. TypeScriptのビルド
2. Viteによるバンドル
3. 静的ファイルの生成

### デプロイ先
