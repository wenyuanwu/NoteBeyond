class Notebook < ApplicationRecord
	belongs_to :user 
	has_many :notes

	validates :user, presence: true
	validates :title, presence: {message: "must have title for new notebook"}

	def self.find_notebooks_by_user(user)	
		notebooks = Notebook.where(user_id: user.id) 
		return notebooks
	end 

end
