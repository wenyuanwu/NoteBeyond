# API Endpoints 

## HTML API 

### Root 

* ```GET /``` - loads React web app 

## JSON API 

### Users 

* ```POST /api/users```
* ```PATCH /api/users```

### Session 

* ```POST /api/session```
* ```DELETE /api/session```

### Notes 

* ```GET /api/notes```
 	* Notes index/search
 	* accepts ```tag_name```, ```notebook_id```query params to list notes by tag 
*  ```POST /api/notes```
*  ```GET /api/notes/:id```
*  ```PATCH /api/notes/:id```
*  ```DELETE /api/notes/:id```

### Notebooks 

* ```GET /api/notebooks```
* ```POST /api/notebooks```
* ```GET /api/notebooks/:id```
* ```DELETE /api/notebooks/:id```
* ```GET /api/notebooks/:id/notes```

### Tags

* ```GET /api/tags```
* ```POST /api/tags```
* ```GET /api/tags/:id```
* ```DELETE /api/tags/:id```
* ```GET /api/tags/:id/notes```
	* index of all notes for a tag 
* ```POST /api/notes/:note_id/tags/:id```
	* add tag to note by id 
* ```DELETE /api/notes/:note_id/tags/:id```
	* remove tag from note by id







