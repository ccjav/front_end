def register(name, email, password)
  user = User.new(name: name, email: email, password: password)
  if user.save
    return user
  else
    # @error_name = @user.errors.messages[:name]
    # @error_email = @user.errors.messages[:email]
    # @error_password = @user.errors.messages[:password]
    # erb :register
  end
end