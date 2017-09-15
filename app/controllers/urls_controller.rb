class UrlsController < ApplicationController

    #
    #   need a post req to create a new url
    #   need a get req from www.domain.com/:key
    #

    def index
        key = params[:key]

        #look up url for key in db
        #send value to client
        #redirect user to value (client side or here? idk)

        render json: {key: key}
    end

    def create
        url = params[:url]

        #enter url into db, get id
        #encode id -> key
        #return www.thisdomain.com/key

        render json: {url: url}
    end

end
