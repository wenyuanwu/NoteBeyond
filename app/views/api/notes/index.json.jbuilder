@notes.each do |note|
	note.set! note.id do 
		json.partial! '/api/notes/note', note: note
	end 
end 