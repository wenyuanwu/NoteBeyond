class Notebook < ApplicationRecord
	belongs_to :user 
	has_many :notes

	validates :user, presence: true
	validates :title, presence: {message: "must have title for new notebook"}
end
