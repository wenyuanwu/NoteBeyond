import React from 'react';
import ReactDOM from 'react-dom';
import TagsInput from 'react-tagsinput';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getCurrentContent, ContentState} from 'draft-js';
import { InlineStyleControls, BlockStyleControls, styleMap, blocksStyleFn } from '../editor/style_controls';
import NoteDropDownListContainer from '../note_dropdown_list/note_dropdown_list_container';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

class NoteEdit extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {
        tags: [], 
        tag:""
      };
	   	this.handleKeyCommand = this.handleKeyCommand.bind(this);
      this.focus = () => this.refs.editor.focus();
	    this.saveContent = this.saveContent.bind(this);
	   	this.updatetitle = this.updatetitle.bind(this);
	   	this.onChange = this.onChange.bind(this);
      this.idleTimeout = null;
      this.onTab = e => this._onTab(e);
      this.toggleBlockType = type => this._toggleBlockType(type);
      this.toggleInlineStyle = style => this._toggleInlineStyle(style);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillReceiveProps(newProps){

    if(this.props.currentNote && !newProps.currentNote){
      return null;
    }

    if ( !this.props.currentNote || (this.props.currentNote.id !== newProps.currentNote.id) ) {
          let content = newProps.currentNote.body;
          this.setState({
          title: newProps.currentNote.title || "",  
          editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content))),
          tags: newProps.currentNote.tags || []
         });
    }
  }

  componentDidMount(){
    this.idleTimeout = setInterval(this.saveContent, 500);
  }

  componentWillUnmount() {
    clearInterval(this.idleTimeout);
  }

  handleChange(tags) {
      this.setState({tags});
    }

  handleChangeInput(tag) {
      this.setState({tag});
    }


  saveContent(){    
    const JScontent = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    
      let newBody = {id: this.props.currentNote.id,
          note: {title: this.state.title,
                 body: JScontent,
                 user_id: this.props.currentNote.user_id,
                 tag_names: this.state.tags,
                 notebook_id: this.props.currentNote.notebook_id}
                };
      this.props.updateNote(newBody);
  }
  
  onChange(editorState){
      this.setState({
        editorState: editorState
      });
  }

  updatetitle(e){
  	let title = e.target.value;
    this.setState({title: title});
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

		const {currentNote} = this.props;
    const {editorState} = this.state;


		if(!currentNote || !editorState){
   				return <h3 className="loading"> </h3>;
   			}
	
    let className = 'RichEditor-editor';

    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

   	return(

			<div className="RichEditor-root-show">
            <div className = "tool_bar">
              <NoteDropDownListContainer />
              <img className = "tag_icon" src ="http://res.cloudinary.com/dltydzsmu/image/upload/v1506467545/tag_gnllkm.png"/>
              <TagsInput
                value={this.state.tags}
                onChange={this.handleChange}
                inputValue={this.state.tag}
                onChangeInput={this.handleChangeInput}
                inputProps={{placeholder: '+'}}
              />

              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />

              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />

              <Link to={`/deletenote`} className="delete-button">
              <img src="http://res.cloudinary.com/dltydzsmu/image/upload/v1506468020/delete_sqsdtp.png" />
              </Link>
              
            </div>

      				<ul className="current-note">
      					<input
      					  className="note-edit-title"
      		        type="text"
		              onChange={this.updatetitle}
		              value={this.state.title}
      			    />
      				</ul>				
              
              <div className={className} onClick={this.focus}>
                <Editor
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

			</div>
		);
  }
}

export default NoteEdit;






