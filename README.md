# SmartMembership

# 開発指針(クライアントサイド)

## アトミックデザインについて

- atom(原子) では基本タグのみ使用できる
- molecule(分子) では atom および基本タグのみ使用できる
- organism(有機体) では別の organism, molecule, atom および基本タグのみ使用できる
- template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
- page(ページ) では template のみ使用できる(基本的に styled コンポーネント の生成は行わない)

## 部品作成ポリシー

- atom(原子) では汎用的に使用できるパーツを作成
- atom(原子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
- molecule(分子) では汎用的に使用できるパーツを作成
- molecule(分子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
- organism(有機体) では固有の文言を含めたパーツを作成
- organism(有機体) では Redux のロジックと TypeScript による動作を組み込む
- template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
- template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
- page(ページ) では template(テンプレート) のみを使用しページを作成
- page(ページ) では ページ全体に影響する最小限の TypeScript による動作を組み込む

## React の記述方法

- 基本的に関数コンポーネントでコーディングする (クラスコンポーネントは使用しない)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 開発環境構築

### `yarn install`

Git リポジトリをクローン後、作成されたディレクトリのルートにて実行してください。

Node モジュールのパッケージが追加された場合(yarn.lock の更新時)は、再度実行する必要があります。

VSCode を使う場合はプラグインに ESLint と Pretter を追加してください。

## Available Scripts

In the project directory, you can run:

### `yarn start`

WindowsOS での開発環境実行コマンド

[http://localhost:54321](http://localhost:54321) がデフォルトブラウザで開きます。

エディターでコードを更新すると自動でリロードされます。

Lint のエラーはコンソール上に表示されます。

### `yarn start:mac`

MacOS 等での開発環境実行コマンド

### `yarn test`

テストコードを実行します。
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

ソースコードをコンパイルして HTML の実行ファイル群を`build`フォルダに生成します。

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

ソースコードの構文チェックを実行します。

### `yarn doc`

ソースコードからドキュメントを作成します。

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 開発指針(サーバーサイド)
