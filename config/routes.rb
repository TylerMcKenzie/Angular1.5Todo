Rails.application.routes.draw do
  root 'index#index'

  devise_for :users

  resources :friendships

  resources :todos, only: [:index, :new, :update, :destroy]


  # Setup Action Cable
  mount ActionCable.server => '/cable'

  # Keep users on angular app and where they were, like a gentleman.
  # get '/*path' => redirect("#/%{path}")

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
