import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getCurrentContent} from 'draft-js';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

class NoteEdit extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {
      		editorState: EditorState.createEmpty(),
    	};
	   	this.handleKeyCommand = this.handleKeyCommand.bind(this);
	    this.saveContent = this.saveContent.bind(this);
	    this.updatebody = this.updatebody.bind(this);
	   	this.updatetitle = this.updatetitle.bind(this);
	   	this.onChange = this.onChange.bind(this);
  }

  saveContent(contentState){
  		console.log("saveContent");
  		const JScontent = JSON.stringify(convertToRaw(contentState));
  		console.log(JScontent);

      	let newBody = {id: this.props.currentNote.id,
  					note: {title: this.props.currentNote.title,
		  				   body: JScontent,
		  				   user_id: this.props.currentNote.user_id,
		  				   notebook_id: this.props.currentNote.notebook_id}
		  		   };	

		debounce((newBody) => {this.props.updatNote(newBody)}, 1000);
  }

	
  onChange(editorState){
	    const contentState = editorState.getCurrentContent();
	    this.saveContent(contentState);
	    this.setState({
	      editorState: editorState
	    });
  }


  // componentWillReceiveProps(newProps){
  // 	if(this.props.currentNote === null && newProps.currentNote){
  // 		let content = {'content': newProps.currentNote.body};
  // 		console.log(content);
  // 		console.log(newProps.currentNote);
  // 		console.log(newProps.currentNote.body);
  // 		console.log(convertFromRaw);
		// if(newProps.currentNote){
  // 			this.setState({editorState: EditorState.createWithContent(convertFromRaw(content))});
  // 		} else{
  // 			this.setState({editorState: EditorState.createEmpty()});
  // 		}  		
  // 	}
  // }

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

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }


  render(){
		
		const {currentNote} = this.props;

		if(!currentNote){
   				return <h3 className="loading"> Loading...</h3>;
   			}
	
   		return(

			<div className="note-edit">

			  <div className="editor">	
				<button onClick={this._onBoldClick.bind(this)}>Bold</button>
				<Editor editorState={this.state.editorState} 
						onChange={this.onChange} 
						placeholder="Start typing..."
						handleKeyCommand={this.handleKeyCommand}
				/>
			  </div>	

				<Link to={`/deletenote`} >
					<img className="delete-button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAYAAADmOUiuAAACbElEQVR42u2XP2gTURzHg5aKQ5dSig5OtlgcstgidnAyWC2YRVPEwUVS0cGpRlwylVQcHEohggGH5nJ3uaQd5CCBgmJTSEDQoYiBDkFMIYKgg0iVxt+Tb8ur3jtyd+8Fhxw8km/uvd/v877vb0Kh3tN7/n3y+XyUyjaVdoeF1Y12E9AL3D5kNwH/JFVVvwfYFUAKWPExz/yWyv8O+DqQm6Zp3kOgJ0FHxrKsRRaLPu9KG27DMG4C8LmEqbOMWDekAZKDVxB0lduo2/T7ig/AF3DwskwHzwPoFdOFQmFPv/QxxOvo7KQ0QE3Twgj6DknCcOGtDwc30bnT0gBzudwJADactEfAT6wtjcJxaYCZTGYAQN/+0l99AH6Hg0dlb9w/qewmk8k+XlOiw53GsG37CDr2Q/rxRiCfWXCaj0MAbPG6wxjHlN1sKGidBc9ms6NumiBGXFbwGADfq3CwxoLruj4BoKqbFsQ4B8ANFYBlFrxYLEYAVHLSVC/iMgqXAGirADSx98UwXDqv6bvBNG3qMZchvg5ATQXgUwDFcbqkkWwWgGn+vcDBO2izJB2QgB4heALAKV4T2AEtAHyIOvMqHHwAh1JIdh/JFtCBBK8FgI8xT+ekAxLYbQCkARx304JOPkOdW9IB6eycgYM63LiGZIaTFgBacPCqCgcvAqCEZBEkK/N6770AcA0r/YIKwLMAqEKPA7DGNNugeS0AfIM6Z1QsklMY4g/QIwCuO2nBItnCaXNSOiCdGMMAaAXo5Bc4OKjCwX4A7vhpT9e0Q9T2l9crmtcbzUcJ/4EbIVUP9XyKEjQDwDUpxrSXnL8BI9Tv3UAALyAAAAAASUVORK5CYII=" />
				</Link>

				<ul className="current-note">
					<input
					  className="note-edit-title"
		              type="text"
		              onChange={this.updatetitle}
		              value={currentNote.title}
			            />
			        <br/>    
					<textarea
					  className="note-edit-body"
		              type="text"
		              onChange={this.updatebody}
		              placeholder = "Start typing..."
		              value={currentNote.body}
		            />
		            
				</ul>				
			</div>
		);
  }
}

export default NoteEdit;




