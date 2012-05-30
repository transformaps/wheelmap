Wheelmap::Application.routes.draw do

  match '/ping' => 'ping#index'

  filter :locale
  RoutingFilter::Locale.include_default_locale = false

  root :to => 'home#index'

  devise_for :admins
  devise_for :users, :controllers => {  :confirmations      => 'confirmations',
                                        :omniauth_callbacks => 'omniauth_callbacks',
                                      }

  devise_scope :user do
    scope 'users' do
      match '/auth/failure' => 'omniauth_callbacks#failure'
    end
  end

  resources :node_types, :only => :index
  resources :search, :only => :index
  resources :feeds, :only => :index
  resources :oauth, :only => [] do
    get :register_osm, :on => :collection
  end

  resources :client_applications

  match 'abingo(/:action(/:id))', :to => 'abingo_dashboard', :as => :abingo

  resources :nodes, :except => :destroy do
    member do
      put :update_wheelchair
      get :claim
    end
  end

  resources :ways, :only => [:index, :show] do
    member do
      put :update_wheelchair
    end
  end

  resources :users, :as => 'profile', :path => '/profile'
  resources :users do
    collection do
      post :authenticate
      get :newsletter
    end
    member do
      post :reset_token
      get :after_signup_edit
      put :after_signup_update
    end
  end

  resources :user, :only => :new # Fake route for redirection to OSM register page

  match '/:region_id/:node_type_id/wheelchair/:wheelchair' => 'landing_pages#index'

  namespace :api do
    resources :docs,        :only  => [:index]
    namespace :docs do
      resources :resources,        :only  => [:index, :show]
    end

    resources :nodes,       :only  => [:index, :show, :update, :create] do
      collection do
        get :search
      end
      member do
        put :update_wheelchair
      end
    end

    resources :categories,   :only  => [:index, :show] do
      resources :node_types, :only  => [:index, :show]
      resources :nodes,      :only  => [:index, :show] do
        collection do
          get :search
        end
      end
    end

    resources :node_types, :only  => [:index, :show] do
      resources :nodes,       :only  => [:index, :show] do
        collection do
          get :search
        end
      end
    end

    resources :locales,     :only => :index
    resources :node_types,  :only => [:index, :show]

    match '/users/authenticate' => 'users#authenticate'

    #Last route in routes.rb
    match '*a', :to => 'api#not_found', :format => false
  end

  match "/dashboard",               :to => redirect("https://metrics.librato.com/share/dashboards/3wf885ot?duration=604800")
  match "/ziemlich-beste-freunde",  :to => redirect("http://blog.wheelmap.org/zbf")
  match "/goeslondon",              :to => redirect("http://blog.wheelmap.org/mitmachen/goes-london/")
  match "/goes-london",             :to => redirect("http://blog.wheelmap.org/mitmachen/goes-london/")
end
