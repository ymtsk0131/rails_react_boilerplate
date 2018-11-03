# Rails+Reactのアプリケーション雛形

## バージョン

Rails 5.2.1
Ruby 2.4.2

## 導入手順

- リポジトリをクローン

```
$ git clone https://github.com/ymtsk0131/rails_react_boilerplate.git
```

- Docker環境構築

```
$ docker-compose build
```

- データベース作成

```
$ docker-compose run rails rails db:create
```

- サーバー立ち上げ

```
$ docker-compose up
```

http://localhost:3000 にアクセスし、ページが表示されれば環境構築完了

あとは自由に開発

## 開発マニュアル

https://github.com/ymtsk0131/rails_react_boilerplate/wiki

＊随時加筆予定