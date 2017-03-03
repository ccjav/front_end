before '/' do
  if logged_in?
    @session = @current_user.id
  end
end

get '/' do 
  # session.clear
  @all_questions = Question.all
  p @current_user
  erb :index
end
