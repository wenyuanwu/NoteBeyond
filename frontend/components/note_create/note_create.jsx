import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getCurrentContent, ContentState} from 'draft-js';
import { blockRenderMap, CheckableListItem, CheckableListItemUtils, CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item';
import { InlineStyleControls, BlockStyleControls, styleMap, blocksStyleFn, getBlockStyle } from '../editor/style_controls';
import StyleButton from '../editor/style_button';
import { Link } from 'react-router-dom';

class NoteCreate extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {editorState: EditorState.createEmpty(), 
	    			  "title": "",
	    			  "body": "" };
	    this.focus = () => this.refs.editor.focus();			  
	    this.update = this.update.bind(this);			  
	    this.onChange = (editorState) => this.setState({editorState});
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.onTab = e => this._onTab(e);
      	this.toggleBlockType = type => this._toggleBlockType(type);
      	this.toggleInlineStyle = style => this._toggleInlineStyle(style);
      	this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	update(property) {
    	return e => this.setState({ [property]: e.target.value });
  	}

	handleSubmit(e){
		e.preventDefault();
		const JScontent = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
		console.log(this.props.currentUser.notebooks);
		let newNote = {note: {
			title: this.state.title,
			body: JScontent,
			user_id: this.props.currentUser.id,
			notebook_id: 16
		}};
		this.props.createNote(newNote);
		this.props.history.push('/');
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
		if(this.state.title===""){
			button = <Link to={"/"} onClick={() => this.props.updateCurrentNote(null)}>Cancel</Link>;
		} else{
			button = <button>Done</button>; 
		}

		const {editorState, title, body} = this.state;

		return(

			<form className="post-form" onSubmit={this.handleSubmit}>

				<div className="RichEditor-root">

              		{button}

	                <BlockStyleControls
	  	              editorState={editorState}
	    	            onToggle={this.toggleBlockType}
	                />

	          	    <InlineStyleControls
	            	    editorState={editorState}
	                	onToggle={this.toggleBlockType}
	             	/>
              	
              		<input
		              type="text"
		              className ="form-title"
		              value={this.state.title}
		              placeholder="Title your note" 
		              onChange={this.update('title')} />

	                <Editor
	                  blockStyleFn={getBlockStyle}
	                  customStyleMap={styleMap}
	                  editorState={editorState}
	                  handleKeyCommand={this.handleKeyCommand}
	                  onChange={this.onChange}
	                  onTab={this.onTab}
	                  placeholder="Tell a story..."
	                  ref="editor"
	                  spellCheck={true}
	                />
              	</div>  
            </form>
		);
	}
}


export default NoteCreate;