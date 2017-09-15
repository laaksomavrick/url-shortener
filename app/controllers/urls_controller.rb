class UrlsController < ApplicationController

    def index
        key = params[:key]
        url = Url.find_by(key: key)        
        render json: {value: url.value}
    end

    def create
        value = params[:url]
        url = Url.create(value: value)
        key = url.encode
        render json: {key: key}
    end

end
