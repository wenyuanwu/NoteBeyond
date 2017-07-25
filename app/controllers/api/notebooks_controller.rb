class Api::NotebooksController < ApplicationController

	def create 
		@notebook = Notebook.create(note_params)

		if@notebook.save 
			render "api/notebooks/show"
		else 
			render(
				json: @note.errors.full_messages, 
				status: 422)
		end 
	end 

	def edit 
		@notebook = current_user.notebooks.find_by(id: params[:id])
	end 

	def update 
		@notebook = current_user.notebooks.find_by(id: params[:id])
		@notebook.update_attributes(notebook_params)
		render "api/notebooks/show"
	end 

	def destroy 
		@notebook = current_user.notebooks.find_by(id: params[:id])
		@notebook.destroy 
		render "api/notes/show" 
	end

	def show 
		@notebook = current_user.notebooks.find_by(id: params[:id])
	end 	

	def index 
		@notebooks = Notebook.find_notebooks_by_user(current_user)
		render "api/notes/index"
	end 

	private

	def notebook_params
		params.require(:notebook).permit(:title, :user_id)
	end

end
