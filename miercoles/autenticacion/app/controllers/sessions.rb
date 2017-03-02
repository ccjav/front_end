post '/register' do
  @user = User.new(name: params[:name], email: params[:email], password: params[:password])
  if @user.save
    session[:id] = @user.id
    redirect to ("/users/#{@user.id}")
  else
    @error_name = @user.errors.messages[:name]
    @error_email = @user.errors.messages[:email]
    @error_password = @user.errors.messages[:password]
    erb :register
  end
end

post '/login' do
  user = User.authenticate(params[:email], params[:password])
  session[:id] = user.id
  redirect to ("/users/#{user.id}")
end

get '/logout' do
  session.clear
  redirect '/'
end
