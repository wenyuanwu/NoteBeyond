# API Endpoints 

## HTML API 

### Root 

* ```GET /``` - loads React web app 

## JSON API 

### Users 

* ```POST /api/users```
* ```PATCH /api/users```
* ```GET /api/users```

### Session 

* ```POST /api/session```
* ```DELETE /api/session```
* ```GET /api/session```

### Notes 

* ```GET /api/notes```
 	* Notes index/search
 	* accepts ```tag_name```, ```notebook_id```query params to list notes by tag 
*  ```POST /api/notes```
*  ```GET /api/notes/:id```
*  ```PATCH /api/notes/:id```
*  ```DELETE /api/notes/:id```



