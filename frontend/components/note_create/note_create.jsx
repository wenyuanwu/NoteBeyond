import React from 'react';
import ReactDOM from 'react-dom';
import TagsInput from 'react-tagsinput';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getCurrentContent, ContentState} from 'draft-js';
import { InlineStyleControls, BlockStyleControls, styleMap, blocksStyleFn } from '../editor/style_controls';
import NoteBookListItem from '../notebook/notebook_list_item';
import { Link } from 'react-router-dom';

class NoteCreate extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {editorState: EditorState.createEmpty(), 
	    			  "title": "",
	    			  "body": "", 
	    			  notebook_id: null,
	    			  tags: [], 
	    			  tag:""};
	    this.focus = () => this.refs.editor.focus();			  
	    this.update = this.update.bind(this);			  
	    this.onChange = (editorState) => this.setState({editorState});
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.onTab = e => this._onTab(e);
      	this.toggleBlockType = type => this._toggleBlockType(type);
      	this.toggleInlineStyle = style => this._toggleInlineStyle(style);
      	this.handleKeyCommand = this.handleKeyCommand.bind(this);
      	// this.revealDropDown = this.revealDropDown.bind(this);
      	// this.hideDropdown = this.hideDropdown.bind(this);
      	this.handleDropDownList = this.handleDropDownList.bind(this);
      	this.handleChange = this.handleChange.bind(this);
    	this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	handleChange(tags) {
    	this.setState({tags});
  	}

  	handleChangeInput(tag) {
    	this.setState({tag});
  	}

	update(property) {
    	return e => this.setState({ [property]: e.target.value });
  	}

  	componentWillReceiveProps(nextProps) {
  		if (!this.state.notebook_id && nextProps.notebooks[0]) {
  			this.setState({notebook_id: nextProps.notebooks[0].id});
  		}
  	}

  	componentDidMount(){
  		this.props.fetchAllNotebooks();
  	}

	handleSubmit(e){
		e.preventDefault();
		const JScontent = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
		console.log("state.tags",this.state.tags);
		console.log("state.tag",this.state.tag);
		// const tag_names = this.state.tags.map(tag => tag.name);
		// console.log("tag_names",tag_names);
		let newNote = {note: {
			title: this.state.title,
			body: JScontent,
			user_id: this.props.currentUser.id,
			notebook_id: this.state.notebook_id,
			tag_names: this.state.tags,
		}};

		this.props.createNote(newNote);

		this.props.history.push('/');
	}

	// revealDropDown (e){
	// 	event.stopPropagation();
	// 	$('#gear-dropdown').removeClass('hidden');
	// 	// $('#gear-dropdown-btn').off('click', this.revealDropdown);
	// 	$(document).on('click', this.hideDropdown);
	// }

	// hideDropdown(){
	// 	$('#gear-dropdown').addClass('hidden');
	// 	$(document).off('click', this.hideDropdown);
	// }

	handleDropDownList(e){
		// e.preventDefault();
		this.setState({notebook_id: e.target.value});
	}

	handleKeyCommand(command) {
	    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
	    if (newState) {
	      this.onChange(newState);
	      return 'handled';
	    }
	    return 'not-handled';
	}

  	_onTab(e) {
    	const maxDepth = 4;
    	this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  	}

	 _toggleBlockType(blockType) {
	    this.onChange(
	    RichUtils.toggleBlockType(this.state.editorState, blockType)
	    );
	 }

	 _toggleInlineStyle(inlineStyle) {
	    this.onChange(
	    RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
	    );
	 }

	render(){

		let button;
		const {notebooks} = this.props; //refactor later 
		const {editorState, title, body} = this.state;

		const notebookItems = notebooks.map(notebook => 
			<option key={notebook.id} value={notebook.id} >{notebook.title}</option> 
			);

		if(this.state.title===""){
			button = <Link to={"/"} className="create-cancel" onClick={() => this.props.updateCurrentNote(null)}>Cancel</Link>;
		} else{
			button = <button className="create-create">Done</button>; 
		}


		return(

			<form className="post-form" onSubmit={this.handleSubmit}>

				<div className="RichEditor-root">

              		<div className="create-button">{button}</div>

              		<div id="gear-dropdown" className="gear-dropdown hidden">
              			<img className="selector-icon" src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506467913/notebook_obz1qs.png"/>
		              		<select
		              			id="dropdownlist"
		              			onChange={this.handleDropDownList}>
		              			{notebookItems}
		              		</select>
	              	</div>

	              	<TagsInput
				        value={this.state.tags}
				        onChange={this.handleChange}
				        inputValue={this.state.tag}
				        onChangeInput={this.handleChangeInput}
      				/>

	                <BlockStyleControls
	  	              editorState={editorState}
	    	            onToggle={this.toggleBlockType}
	                />

	          	    <InlineStyleControls
	            	    editorState={editorState}
	                	onToggle={this.toggleInlineStyle}
	             	/>
              	
              		<input
		              type="text"
		              className ="form-title"
		              value={this.state.title}
		              placeholder="Title your note" 
		              onChange={this.update('title')} />

	                <Editor className = 'RichEditor-editor'
	                  blockStyleFn={blocksStyleFn}
	                  customStyleMap={styleMap}
	                  editorState={editorState}
	                  handleKeyCommand={this.handleKeyCommand}
	                  onChange={this.onChange}
	                  onTab={this.onTab}
	                  placeholder="Just start typing..."
	                  ref="editor"
	                  spellCheck={true}
	                />
              	</div>  
            </form>
		);
	}
}


export default NoteCreate;