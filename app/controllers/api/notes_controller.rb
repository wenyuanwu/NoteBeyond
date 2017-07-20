class Api::NotesController < ApplicationController
	
		

	private

	def note_params
		params.require(:note).permit(:title, :body, :archived, :user_id, :notebook_id)
	end
end
