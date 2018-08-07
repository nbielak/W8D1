class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: 'users/show'
    else
      flash[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    unless (logged_in?)
      render json: "not logged in", status: 404
    else
      logout!
      render json: {}
    end
  end
end
