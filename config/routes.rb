Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
  	resource :user, only: [:create]
  	resource :session, only: [:create, :destroy, :show]
  	resources :notes
  	resources :notebooks
  	resources :tags
  end 

  root to: "static_pages#root"
  
end
