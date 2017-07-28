class Api::NotesController < ApplicationController
	
	def create 
		@note = Note.create(note_params)
		@note.tags = params[:note][:tags] ||=[]

		if@note.save 
			render "api/notes/show"
		else 
			render(
				json: @note.errors.full_messages, 
				status: 422)
		end 
	end 

	def edit 
		@note = current_user.notes.find_by(id: params[:id])
	end 

	def update 
		@note = current_user.notes.find_by(id: params[:id])
		@note.update_attributes(note_params)
		@note.tags = params[:note][:tags] ||=[]
		render "api/notes/show"
	end 

	def destroy 
		@note = current_user.notes.find_by(id: params[:id])
		@note.destroy 
		render "api/notes/show" 
	end

	def show 
		@note = current_user.notes.find_by(id: params[:id])
	end 	

	def index 
		@notes = Note.find_notes_by_user(current_user)
		render "api/notes/index"
	end 

	private

	def note_params
		params.require(:note).permit(:title, :body, :archived, :user_id, :notebook_id)
	end

end
