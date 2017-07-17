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

### SearchResultsContainer (bonus feature)
* Search 
* NoteIndex 

### NotebookSearch (bonus feature)
* AutoSearch 
* AutoSearchResults 
* NewNotebook  

### TagsSearch (bonus feature) 
* AutoSearch 
* AutoSearchResults
* NewTag

# Routes 

| Path | Component | 
| - - - | - - - |
| "sign-up" | "AuthFormContainer" |



