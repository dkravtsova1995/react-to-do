import React, { Component } from 'react';

class ToDo extends Component {
  deleteTodo() {
    this.props.deleteTodo(this.props.index);
  }

  render() {
     return (
       <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>
          <button onClick={() => this.deleteTodo()}>delete</button>
        </li>
     );
   }
 }

 export default ToDo;
