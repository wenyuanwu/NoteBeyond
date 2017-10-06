json.extract! notebook, :id, :title, :user_id
json.notes notebook.notes.each do |note|
				json.partial! '/api/notes/note', note: note
		   end  