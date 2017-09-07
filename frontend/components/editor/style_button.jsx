import React from 'react';

export default class StyleButton extends React.Component {
  constructor(props) {
    super(props);

    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = this.props.className + ' RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <i
        className={className}
        title={this.props.title}
        onClick={this.onToggle}
        aria-hidden="true"
      />
    );
  }
}

