class Removeindex < ActiveRecord::Migration[5.1]
  def change
  	remove_index :notes, [:user_id, :notebook_id]
  end
end
