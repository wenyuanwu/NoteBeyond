json.extract! tag, :id, :name,:user_id
json.notes do 
	json.array! tag.notes
end 