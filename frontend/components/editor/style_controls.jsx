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

export const getBlockStyle = (block) => {
        switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
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
          console.log(this.props);

          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }

var INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'},
      ];

const BLOCK_TYPES = [
        {label: 'H1', style: 'header-one'},
        {label: 'H2', style: 'header-two'},
        {label: 'H3', style: 'header-three'},
        {label: 'H4', style: 'header-four'},
        {label: 'H5', style: 'header-five'},
        {label: 'H6', style: 'header-six'},
        {label: 'Blockquote', style: 'blockquote'},
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'},
        {label: 'Code Block', style: 'code-block'},
      ];

export const blocksStyleFn = (block) => {
  switch (block.getType()) {
    case 'unordered-list-item': return 'ul-block-style';
    case 'ordered-list-item': return 'ol-block-style';
    case 'blockquote': return 'RichEditor-blockquote';
    case CHECKABLE_LIST_ITEM: return CHECKABLE_LIST_ITEM;
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
                label={type.label}
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
          key={type.title}
          active={currentStyle.has(type.style)}
          className={type.className}
          title={type.title}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
