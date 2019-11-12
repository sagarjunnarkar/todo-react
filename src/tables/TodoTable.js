import React from 'react'

function TodoTable(props) {
  return(
    <table>
      <thead>
        <tr>
          <th>Todo Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.length > 0 ? (
          props.todos.map(todo =>
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td><button onClick={() => {
                  props.editTodo(todo)
                }}>Edit</button></td>
              <td><button onClick={() => {props.deleteTodo(todo)}}>Delete</button></td>
            </tr>
          )
        ) : (
        <tr>
          <td colSpan={3}>No Todo</td>
        </tr>
        )}
      </tbody>
    </table>
  )
}

export default TodoTable