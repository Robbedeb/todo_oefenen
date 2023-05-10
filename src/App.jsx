import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTooForm"

export default function app(){

  const [todos, setTodos] = useState([])
  


  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <NewTodoForm></NewTodoForm>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} 
        onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    )})}

  </ul>
  </>
  )
}