import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData as dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  }


  function addTodo(title: string): void {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos
    ]
    )
  }

  function todoDelete(id: number): void {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-auto">
      <h1 className="font-bold text-3xl text-center">
        Your TODOs
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm
          onSubmit={addTodo} />
       <TodoList
       todos={todos}
       onCompletedChange={setTodoCompleted}
       onDelete={todoDelete}/>
      </div>
      <TodoSummary
        todos = {todos}
        deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App
