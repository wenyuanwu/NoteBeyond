class Api::TagsController < ApplicationController

	def create 
		@tag = Tag.create(tag_params)

		if@tag.save 
			render "api/tags/show"
		else 
			render(
				json: @tag.errors.full_messages, 
				status: 422)
		end 
	end 

	def edit 
		@tag = current_user.tags.find_by(id: params[:id])
	end 

	def update 
		@tag = current_user.tags.find_by(id: params[:id])
		@tag.update_attributes(tag_params)
		render "api/tags/show"
	end 

	def destroy 
		@tag = current_user.tags.find_by(id: params[:id])
		@tag.destroy 
		render "api/tags/show" 
	end

	def show 
		@tag = current_user.tags.find_by(id: params[:id])
	end 	

	def index 
		@tags = Tag.where(user_id: current_user.id)
		render "api/tags/index"
	end 

	private

	def tag_params
		params.require(:tag).permit(:name, :user_id)
	end

end
