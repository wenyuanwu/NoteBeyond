import React from 'react';

class NoteCreate extends React.Component {

	constructor(props) {
	    super(props);
	    this.state={
	    	title: "",
	    	body: "",
	    	user_id: "",
	    	notebook_id: ""
	    };
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(property) {
    	return e => this.setState({ [property]: e.target.value });
  	}

	handleSubmit(e){
		e.preventDefault();
		let newNote = {note: {
			title: this.state.title,
			body: this.state.body,
			user_id: this.props.notes[0].user_id,
			notebook_id: this.props.notes[0].notebook_id	
		}};
		this.props.createNote(newNote);
		this.props.history.push('/');
	}

	render(){
		return(
			<section className="form">
		        <form className="post-form" onSubmit={this.handleSubmit}>
		            <header>Header placehoder</header>
		 
		             <input
		              type="text"
		              className ="form-title"
		              value={this.state.title}
		              placeholder="Title your note" 
		              onChange={this.update('title')} />

		            <input
		              type="text"
		              className ="form-body"
		              value={this.state.body}
		              placeholder="Drag files here or just start typing..."
		              onChange={this.update('body')} />  
		          <button>Done</button>
		        </form>
	        </section>
		);
	}
}


export default NoteCreate;