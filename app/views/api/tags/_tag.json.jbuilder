json.extract! tag, :id, :name,:user_id
json.notes tag.notes.each do |note| 
	json.partial! '/api/notes/note', note: note
end 