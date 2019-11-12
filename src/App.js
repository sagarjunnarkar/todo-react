import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './tables/TodoTable';
import AddTodoForm from './forms/AddTodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {todoData: [{id: 0, title: 'bla bal'}], editMode: false, editData: null};
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(data){
    if (this.state.editMode){
      const todoList = this.state.todoData.map(todo => {
        if (todo.id == this.state.editData.id) {
          return {id: todo.id, title: data};
        } else {
          return todo;
        }
      });
      this.setState({todoData: todoList,editMode: false, editData: null})
    } else {
      const dataObj = {
        id: this.state.todoData.length + 1,
        title: data
      }

      const datalist = this.state.todoData;
      datalist.push(dataObj);
      this.setState({todoData: datalist});

    }

  }

  editTodo(data){
    this.setState({editMode: true, editData: data});
  }

  deleteTodo(data){
    var array = [...this.state.todoData];
    var index = array.indexOf(data);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({todoData: array});
    }
  }

  render(){
    return (
      <div className='container'>
        <h1>Todo App</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            <h2>Add Todo</h2>
            <AddTodoForm
              addTodo={this.addTodo}
              editMode={this.state.editMode}
              editData={this.state.editData}
            />
          </div>
          <div className='flex-large'>
            <h2>List Todo</h2>
            <TodoTable
              todos={this.state.todoData}
              editTodo={this.editTodo}
              deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
