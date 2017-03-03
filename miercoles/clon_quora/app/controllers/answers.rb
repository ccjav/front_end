post '/answer/:question_id' do
  answer = new_answer(session[:user_id], params[:answer], params[:question_id] )
  if answer
    redirect to "/question/#{params[:question_id]}"
  end
end