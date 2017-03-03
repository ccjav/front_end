get '/ask' do
  erb :ask
end

post '/ask' do
  question = new_question(session[:user_id], params[:question])
end