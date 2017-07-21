class Note < ApplicationRecord
	belongs_to :user
	belongs_to :notebook

	validates :user, :notebook, presence: true
	validates :title, presence: {message: "must have title for new note"}
	validates :user, :uniqueness => {:scope => :id}
	validates :notebook, :uniqueness => {:scope => :id}
end
