class Tagging < ApplicationRecord
	validates :note, :tag, presence: true
	validates :tag_id, uniqueness: { scope: :note_id }

	belongs_to :note
	belongs_to :tag 
end
