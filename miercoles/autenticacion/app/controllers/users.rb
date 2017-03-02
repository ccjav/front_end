before '/users/:id' do
  pass if session[:id]
  redirect '/login'
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :id
end