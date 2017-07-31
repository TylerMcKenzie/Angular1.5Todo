Rails.application.routes.draw do
  root 'index#index'

  # Keep users on angular app and where they were, like a gentleman.
  # get '/*path' => redirect("#/%{path}")

  # resources :todo
  get '/todos' => 'todo#index'

  post 'todos' => 'todo#new'
  put '/todos/:id' => 'todo#update'
  delete 'todos/:id' => 'todo#delete'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
