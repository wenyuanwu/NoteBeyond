class Removemoreindex < ActiveRecord::Migration[5.1]
  def change
  	remove_index :notes, :user_id
  	remove_index :notes, :notebook_id
  	remove_index :notebooks, :user_id
  end
end
