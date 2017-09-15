Rails.application.routes.draw do

    get '/:key', to: 'urls#index'
    post '/', to: 'urls#create'

end
