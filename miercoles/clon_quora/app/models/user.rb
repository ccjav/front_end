class User < ActiveRecord::Base
  has_many :questions
  has_many :answers

  def self.authenticate(email, user_password)
    user = User.find_by(email: email)   
    if user && (user.password == user_password)
      return user
    else
      nil
    end
  end
end
