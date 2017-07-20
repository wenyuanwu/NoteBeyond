class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false 
      t.text :body
      t.integer :user_id, null: false
      t.integer :notebook_id, null: false 
      t.boolean :archived, default: false 	
      t.timestamps
    end

    add_index :notes, [:user_id, :notebook_id], unique: true
  end
end
