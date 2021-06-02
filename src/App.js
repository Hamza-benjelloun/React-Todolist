import Todolist from './Todolist'
import React, {useState} from 'react'

function App() {
  const [todos,setTodos] = useState(['Todo1','Todo2'])
  return (
    <>
      <Todolist todos={todos}/>
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
