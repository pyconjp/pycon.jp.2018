# 随時更新中
ここにドキュメントを書いていきます.

`master` and `dev`レポジトリへの直接の変更禁止！！

必ずプルリクしてください

基本レビューをしてもらうこと、オブザーバーや急ぎの際はPRをして自分で最終チェックしてください

# 環境
node v8.9.1以上

# インストール
`npm i`

# コマンド
```
$ npm run dev
開発用コマンド
http://localhost:4000/2018/

※/2018/をベースURLにしている為、上記のアドレスで確認してください

$ npm run build
本番へ向け、jsやcssをビルドします

$ npm run start
プロダクション向けにサーバー起動
※必ず先にbuildすること

$ npm run generate
静的にHTMLに吐き出します。
distディレクトリが作成されます
```

# ディレクトリ構成
https://ja.nuxtjs.org/guide/directory-structure#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA

## pagesについて
1. `pages`直下には `page_name.vue` のvueファイルを置く
2. `_lang`ディレクトリに `page_name` ディレクトリを作成（トップだけ特別になっているので注意
3. `page_name` ディレクトリに `index.vue` を作成、テンプレートファイル(pug)やスタイル(sass)ファイルになるべく分割してください
4. `import PageName from './_lang/page_name/index'`
   `export default PageName` と`page_name.vue`の`script`に記載する

# 多言語化
`locales`ディレクトリ に `ja.json` と `en.json`に記載して,vueファイルなどで`this.$t('top.title')`(テンプレートの場合はthisいらない）として使います。

`ja`と`en`の`key`は必ず揃えてください

ページ名をトップキーにしてください。

現在の`locale`はstore`gettre`から取れます。

例
```
  import { mapGetters } from 'vuex'
  export default {
    //..省略
    computed: mapGetters({
      locale: 'locale'
    }),
    //..省略
  }
```

## 多言語化のパス
`ja` -> `/`

`en` -> `/en`

例えばスポンサーなら

`ja` -> `/sponsor`

`en` -> `/en/sponsor`

リンクパスは `nuxt-link(:to="$i18n.path('sponsor')" exact)` のように対応`(HeaderNavi参照

# その他
## 開発環境のPort変更

package.json

```json
"config": {
  "nuxt": {
    "host": "0.0.0.0",
    "port": "4000" // ここを変更
  }
},
