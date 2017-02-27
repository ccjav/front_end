get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/signup' do
	player1 = User.create(name: params[:player1])
	player2 = User.create(name: params[:player2])
	session[:player1] = player1.id
	session[:player2] = player2.id

	redirect "/game"
end

