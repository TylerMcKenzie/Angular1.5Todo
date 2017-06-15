Rails.application.routes.draw do
  root 'index#index'

  # Keep users on angular app and where they were, like a gentleman.
  # get '/*path' => redirect("#/%{path}")

  # resources :todo
  get '/todo' => 'todo#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
