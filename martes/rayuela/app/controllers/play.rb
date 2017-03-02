get '/play' do
  # Look in app/views/index.erb
  erb :play
end

get '/game' do

  	erb :play
end

post '/new_game' do
	game = Game.create()
	session[:game] = game.id
	player1 = User.find(session[:player1])
	player2 = User.find(session[:player2])

	player1.rounds.create(game: game)
	player2.rounds.create(game: game)
	p params
	"new pong"
	"#{game.id}"
end

post '/results' do
	# params[:winner]
	game = Game.find(params[:game])
	game.winner = params[:player]
	game.save
	# p params[:game]
	# p params
	p "juego"
	p game
end
