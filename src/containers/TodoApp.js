import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

class TodoApp extends Component {

  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false 
    });
    this.props.onNewTodoChanged('');
  }

  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone({
      index,
      checked : event.target.checked
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.message}</h3>
        <NewTodoForm
            newTodo={this.props.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.props.onNewTodoChanged} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return  {
   message : state.message,
   newTodo : state.newTodo,
   todos  : state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo)  {
      dispatch(actions.newTodoChanged(newTodo));
    }, 
   onAddTodo(todo) {
   dispatch(actions.addTodo(todo));
  },
  onToggleTodoDone(toggle) {
    dispatch(actions.toggleTodoDone(toggle));
  },
 }

}




export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);



//mapStateToProps connects redux store to the component
  //state as props 

//actions as props : mapDispatchToProps