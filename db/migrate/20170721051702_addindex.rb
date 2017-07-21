class Addindex < ActiveRecord::Migration[5.1]
  def change
  	add_index :notes, :user_id, unique: true
  	add_index :notes, :notebook_id, unique: true
  end
end
