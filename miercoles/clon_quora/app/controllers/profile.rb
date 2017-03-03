before '/profile/:id' do
  if logged_in?
    @session = @current_user.id
  end
end

get '/profile/:id' do
  @user = User.find(params[:id])
  @user_questions = @user.questions
  p @current_user
  erb :profile
end