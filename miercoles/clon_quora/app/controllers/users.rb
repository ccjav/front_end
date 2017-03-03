get '/signup' do  
  erb :signup
end

get '/signin' do
  erb :signin
end

post '/signup' do
  user = register(params[:name], params[:email], params[:password])
  if user
    session[:user_id] = user.id
    redirect to ("/profile/#{session[:user_id]}")
  else
    @error_name = user.errors.messages[:name]
    @error_email = user.errors.messages[:email]
    @error_password = user.errors.messages[:password]
    erb :register
  end
end

post '/signin' do
  user = User.authenticate(params[:email], params[:password])
  if user
    session[:user_id] = user.id
    redirect to ("/profile/#{session[:user_id]}")
  else
    "nop"
  end
end