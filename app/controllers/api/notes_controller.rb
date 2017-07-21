class Api::NotesController < ApplicationController

	
	def create 
		@note = Note.create(note_params)

		if@note.save 
			render "api/notes/show"
		else 
			render(
				json: @note.errors.full_messages, 
				status: 422)
		end 
	end 

	def edit 
		@note = Note.find(params[:id])
	end 

	def update 
		@note = Note.find(params[:id])
		@note.update_attributes(note_params)
		render "api/notes/show"
	end 

	def destroy 
		@note = Note.find(params[:id])
		@note.destroy 
		render "api/notes/show" 
	end

	def show 
		@note = Note.find(params[:id])
	end 	

	def index 
		@note = Note.find_notes_by_user(current_user)
		render "api/notes/index"
	end 

	private

	def note_params
		params.require(:note).permit(:title, :body, :archived, :user_id, :notebook_id)
	end

end
