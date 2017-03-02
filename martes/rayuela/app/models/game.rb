class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :rounds
  has_many :users, through: :rounds
end
