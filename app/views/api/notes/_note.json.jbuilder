json.extract! note, :id, :title, :body, :archived, :user_id, :notebook_id, :tag_ids
json.tags note.tags.pluck(:name) || []