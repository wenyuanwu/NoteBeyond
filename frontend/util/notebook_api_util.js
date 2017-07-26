
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

export const fetchSingleNotebook = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}`
  })
);

export const fetchAllNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  })
);

export const deleteNotebook = notebook => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${notebook.id}`
  })
);