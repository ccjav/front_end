def new_answer(user, answer, question)
  answer = Answer.new(user_id: user, answer: answer, question_id: question)
  if answer.save
    return answer
  end
end