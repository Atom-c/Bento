class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user

  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['Invalid credentials']}, status 401 if !current_user
  end
end
