import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item';


export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: 'Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
    fontSize: 12,
    whiteSpace: 'pre',
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
  HIGHLIGHT: {
    backgroundColor: 'rgba(255, 230, 0, 0.5)',
  },
};

class StyleButton extends React.Component {
        constructor() {
          super();
          this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
          };
        }

        render() {
          let className = 'RichEditor-styleButton';
          if (this.props.active) {
            className += ' RichEditor-activeButton';
          }

          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }

var INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD', icon: <i className='fa fa-bold'></i>},
        {label: 'Italic', style: 'ITALIC', icon: <i className='fa fa-italic'></i>},
        {label: 'Underline', style: 'UNDERLINE',icon:<i className='fa fa-underline'></i>},
        {label: 'Strikethrough', style: 'STRIKETHROUGH', icon:<i className='fa fa-strikethrough'></i>}
      ];

const BLOCK_TYPES = [
        {label: 'Blockquote', style: 'blockquote', icon: <i className='fa fa-quote-left'></i> },
        {label: 'UL', style: 'unordered-list-item', icon: <i className='fa fa-list-ul'></i>},
        {label: 'OL', style: 'ordered-list-item', icon: <i className='fa fa-list-ol'></i>},
        {label: 'Code Block', style: 'code-block', icon: <i className='fa fa-code'></i>},
      ];

export const blocksStyleFn = (block) => {
  switch (block.getType()) {
    case 'unordered-list-item': return 'ul-block-style';
    case 'ordered-list-item': return 'ol-block-style';
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
};

export const BlockStyleControls = (props) => {
        const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();
        return (
          <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.icon}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="inline-controls">
      { INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
