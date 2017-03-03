before '/question/:id' do
  if logged_in?
    @session = @current_user.id
  end
end

get '/question/:id' do
  @question = Question.find(params[:id])
  @answers = Answer.where(question_id: params[:id])

  erb :question  
end

