def new_question(user, question)
  question = Question.new(question: question, user_id: user)
  if question.save
    return question
  end
end