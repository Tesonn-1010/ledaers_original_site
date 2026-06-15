# 骨霧（こつぎり）

福岡で実際に食べ歩いた豚骨ラーメンだけを紹介する、スマホ向けの静的サイトです。

## ページ

- `index.html`: メインページ
- `detail.html`: 一双の詳細ページ

## 構成

```text
.
├─ index.html
├─ detail.html
├─ assets/
│  ├─ main-*.webp
│  └─ detail-*.webp
├─ CNAME
└─ .github/workflows/deploy.yml
```

## 動かし方

`index.html` をブラウザで開くだけで表示できます。
依存パッケージのインストールやビルド作業は不要です。

## 公開

GitHub Pages workflow は、このリポジトリの静的ファイルをそのままアップロードします。
