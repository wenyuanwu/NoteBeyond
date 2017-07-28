import React from 'react';
import ReactDOM from 'react-dom';
import TagsInput from 'react-tagsinput';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getCurrentContent, ContentState} from 'draft-js';
import { blockRenderMap, CheckableListItem, CheckableListItemUtils, CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item';
import { InlineStyleControls, BlockStyleControls, styleMap, blocksStyleFn, getBlockStyle } from '../editor/style_controls';
import StyleButton from '../editor/style_button';
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
      this.idleTagTimeout = null;
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
          editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content))),
          tags: newProps.currentNote.tags
         });
    }
  }

  componentWillUnmount() {
    clearInterval(this.idleTimeout);
  }

  handleChange(tags) {
      this.setState({tags});
      clearTimeout(this.idleTagTimeout);
      this.idleTagTimeout = setTimeout(this.saveContent, 500);
    }

  handleChangeInput(tag) {
      this.setState({tag});
    }


  saveContent(){
      const JScontent = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
      
        let newBody = {id: this.props.currentNote.id,
            note: {title: this.props.currentNote.title,
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

      clearTimeout(this.idleTimeout);
      this.idleTimeout = setTimeout(this.saveContent, 500);

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

			<div className="RichEditor-root">

      				<Link to={`/deletenote`}  >
      					<img className="delete-button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAYAAADmOUiuAAACbElEQVR42u2XP2gTURzHg5aKQ5dSig5OtlgcstgidnAyWC2YRVPEwUVS0cGpRlwylVQcHEohggGH5nJ3uaQd5CCBgmJTSEDQoYiBDkFMIYKgg0iVxt+Tb8ur3jtyd+8Fhxw8km/uvd/v877vb0Kh3tN7/n3y+XyUyjaVdoeF1Y12E9AL3D5kNwH/JFVVvwfYFUAKWPExz/yWyv8O+DqQm6Zp3kOgJ0FHxrKsRRaLPu9KG27DMG4C8LmEqbOMWDekAZKDVxB0lduo2/T7ig/AF3DwskwHzwPoFdOFQmFPv/QxxOvo7KQ0QE3Twgj6DknCcOGtDwc30bnT0gBzudwJADactEfAT6wtjcJxaYCZTGYAQN/+0l99AH6Hg0dlb9w/qewmk8k+XlOiw53GsG37CDr2Q/rxRiCfWXCaj0MAbPG6wxjHlN1sKGidBc9ms6NumiBGXFbwGADfq3CwxoLruj4BoKqbFsQ4B8ANFYBlFrxYLEYAVHLSVC/iMgqXAGirADSx98UwXDqv6bvBNG3qMZchvg5ATQXgUwDFcbqkkWwWgGn+vcDBO2izJB2QgB4heALAKV4T2AEtAHyIOvMqHHwAh1JIdh/JFtCBBK8FgI8xT+ekAxLYbQCkARx304JOPkOdW9IB6eycgYM63LiGZIaTFgBacPCqCgcvAqCEZBEkK/N6770AcA0r/YIKwLMAqEKPA7DGNNugeS0AfIM6Z1QsklMY4g/QIwCuO2nBItnCaXNSOiCdGMMAaAXo5Bc4OKjCwX4A7vhpT9e0Q9T2l9crmtcbzUcJ/4EbIVUP9XyKEjQDwDUpxrSXnL8BI9Tv3UAALyAAAAAASUVORK5CYII=" />
      				</Link>

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

      				<ul className="current-note">
      					<input
      					  className="note-edit-title"
      		              type="text"
      		              onChange={this.updatetitle}
      		              value={currentNote.title}
      			            />
      				</ul>				
              
              <div className={className} onClick={this.focus}>
                <Editor
                  blockStyleFn={getBlockStyle}
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






