json.extract! note, :id, :title, :body, :archived, :user_id, :notebook_id, :tag_ids
json.tags do 
	json.array! note.tags
end 