class Tag < ApplicationRecord
	validates :name, :user, presence: true 

	belongs_to :user, class_name: :User 
	has_many :taggings, dependent: :destroy
  	has_many :notes, through: :taggings

  	

end

