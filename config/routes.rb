Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :timeLogs, only: [:index, :show, :create, :update, :destroy]
  end

  root 'static_pages#root'
  get '*path', to: 'static_pages#root'

end
