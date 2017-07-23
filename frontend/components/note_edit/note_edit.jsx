import React from 'react';
import merge from 'lodash/merge';

class NoteEdit extends React.Component {

  constructor(props) {
	    super(props);
	    this.updatebody = this.updatebody.bind(this);
	   	this.updatetitle = this.updatetitle.bind(this);
  }

  updatebody(e){
  	let body = e.target.value;
  	let newNote = {id: this.props.currentNote.id,
  					note: {title: this.props.currentNote.title,
		  				   body: body,
		  				   user_id: this.props.currentNote.user_id,
		  				   notebook_id: this.props.currentNote.notebook_id}
		  		   };

    this.props.updateNote(newNote);
  }

  updatetitle(e){
  	let title = e.target.value;
  	let newNote = {id: this.props.currentNote.id,
  					note: {title: title,
		  				   body: this.props.currentNote.body,
		  				   user_id: this.props.currentNote.user_id,
		  				   notebook_id: this.props.currentNote.notebook_id}
		  		   };

    this.props.updateNote(newNote);
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }	
  }

  render(){
		
		const {currentNote} = this.props;

		if(!currentNote){
   				return null;
   			}
	
   		return(

			<div className="note-edit">
				<header>Current Note</header>
				<ul className="current-note">
					<input
					  className="title"
		              type="text"
		              placeholder = {currentNote.title}
		              onChange={this.updatetitle}
		            />

					<input
					  className="body"
		              type="text"
		              placeholder = {currentNote.body}
		              onChange={this.updatebody}
		            />
		            
				</ul>
			</div>	
		);
  }
}

export default NoteEdit;