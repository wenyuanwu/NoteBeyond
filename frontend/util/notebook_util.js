
export const createNotebook = notebook => (
  $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: notebook
  })
);

export const updateNotebook = notebook => (
  $.ajax({
    method: 'PATCH',
    url: `/api/notebooks/${notebook.id}`,
    data: notebook
  })
);

export const fetchSingleNote = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}`
  })
);

export const fetchAllNotes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  })
);

export const deleteNote = note => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notes/${note.id}`
  })
);