class Note < ApplicationRecord
	belongs_to :user
	belongs_to :notebooks

	validates :user, :notebooks, presence: true
	validates :title, presence: {message: "must have title for new note"}
	validates :user, :notebooks, uniqueness: true 
	
end
