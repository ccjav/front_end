class CreateUsersGames < ActiveRecord::Migration
  def change
  	create_table :users do |t|
      t.string :name

      t.timestamps
    end

    create_table :games do |t|
      t.string :winner
      t.string :looser

      t.timestamps
    end

    create_table :rounds do |t|
      t.belongs_to :user, index: true
      t.belongs_to :game, index: true

      t.timestamps
    end
  end
end
