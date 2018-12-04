source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

# 全ての環境で利用
# デフォルト
gem 'rails', '5.2.1'
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
gem 'puma', '~> 3.11'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
# gem 'mini_racer', platforms: :ruby
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
# gem 'redis', '~> 4.0'
# gem 'bcrypt', '~> 3.1.7'
# gem 'mini_magick', '~> 4.8'
# gem 'capistrano-rails', group: :development
gem 'bootsnap', '>= 1.1.0', require: false

# 以下追加したgem
gem 'meta-tags' # メタタグをセットするメソッドを提供
gem 'devise'
gem 'faker'

# 開発環境とテスト環境で利用
group :development, :test do
  # デフォルト
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  
  # 以下追加したgem
  gem 'pry-rails'            # コード内にbinding.pryと記述した箇所で処理が止まり、コマンドラインのサーバーを立ち上げているタブからデバッグが可能になる
  gem 'better_errors'        # エラー画面の表示をリッチにする
  gem 'binding_of_caller'    # エラー画面から対話的にデバッグができる（railsコンソールのようなイメージ）
  gem 'rack-mini-profiler'   # パフォーマンス計測ツール
  gem 'bullet'               # 開発環境でアプリ実行時にN+1問題を検出し、アラートを表示する
  gem 'rspec-rails'          # テストフレームワーク
end

# 開発環境で利用
group :development do
  # デフォルト
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# テスト環境で利用
group :test do
  # デフォルト
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
