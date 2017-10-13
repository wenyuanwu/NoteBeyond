export const createTag = tag => (
	$.ajax({
		method: "POST",
		url: "/api/tags",
		data: tag
	})
);

export const updateTag = tag => (
	$.ajax({
		method: "PATCH",
		url: `/api/tags/${tag.id}`,
		data: tag
	})
);

export const fetchSingleTag = id => (
	$.ajax({
		method: "GET",
		url: `/api/tags/${id}`
	})
);

export const fetchAllTags = () => (
	$.ajax({
		method: "GET",
		url: "/api/tags"
	})
);

export const deleteTag = tag => (
	$.ajax({
		method: "DELETE",
		url: `/api/tags/${tag.id}`
	})
);
