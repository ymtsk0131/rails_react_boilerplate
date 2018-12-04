Rails.application.routes.draw do
  devise_for :users
  get 'users', to: 'users#index'
  get 'api/users', to: 'api/users#index'
end
