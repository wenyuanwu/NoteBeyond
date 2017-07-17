# Component Hierarchy 

### AuthFormContainer 
* AuthForm 

### HomeContainer 
* Home 
* Sidebar 

### NotesContainer
* NotesHeader 
* NoteIndex 

### NoteBookContainer
* NoteBookHeader 
* NoteBookIndex 

### TagContainer
* TagsHeader 
* TagsIndex 

### NewNoteContainer
* NewNote 
* EditTool
* NewNoteButton

### NewNotebook
* NewNotebook

### NewTag 
* NewTag 

### NoteIndex
* NoteIndexItem
* NoteDetail 
  * NoteTools 
  * NotebookSearch (bonus feature)
  * Tags 
  	* Tag
  * Note 

### SearchResultsContainer 
* Search 
* NoteIndex 

### NotebookSearch 
* AutoSearch 
* AutoSearchResults 
* NewNotebook  

### TagsSearch 
* AutoSearch 
* AutoSearchResults
* NewTag

# Routes 

| Path          | Component     | 
| ------------- |:-------------:| 
| "/sign-up"     | "AuthFormContainer" | 
| "/sign-in"     | "AuthFormContainer"     | 
| "/home" 	     | "HomeContainer"     | 
| "/home/note/:noteId" | "NotesContainer" | 
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" | 
| "/home/tag/:tagId/note/:notedId" | "TagContainer" | 
| "/home/search-results" | "SearchResultsContainer" | 
| "/new-note" | "NewNoteContainer" | 
| "/new-notebook"  | "NewNotebook" | 
| "/new-tag"       | "NewTag"      | 
| "/tag-search"     | "TagSearch"   | 
| "/notebook-search" | "NotebookSearch" | 





