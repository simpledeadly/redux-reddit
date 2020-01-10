import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class ListRow extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const boxShadow = this.props.selected ? 'inset 0 0 20px #f2f2f2' : 'inset 0 0 0 0 #fff';
    return (
      <div
        style={{ boxShadow }}
        onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }

  onClick() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.rowId);
    }
  }

}
