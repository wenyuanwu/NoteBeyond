
export const createNote = note => (
  $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: note
  })
);

export const updateNote = note => (
  $.ajax({
    method: 'PATCH',
    url: `/api/notes/${note.id}`,
    data: note
  })
);

export const fetchSingleNote = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notes/${id}`
  })
);

export const fetchAllNotes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notes'
  })
);

export const deleteNote = note => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notes/${note.id}`
  })
);