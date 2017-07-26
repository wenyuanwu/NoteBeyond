class Note < ApplicationRecord
	belongs_to :user
	belongs_to :notebook

	validates :user, :notebook, presence: true
	validates :title, presence: {message: "must have title for new note"}
	validates_uniqueness_of :title, scope:[:user_id, :notebook_id]
	
	def self.find_notes_by_user(user)	
		notes = Note.where(user_id: user.id) 
		return notes
	end

end
