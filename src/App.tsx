import TodoItem from "./components/TodoItem"
import { dummyData as dummyData } from "./data/todos"

function App() {


  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your TODOs
      </h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map(todo => (
            // <p key={todo.id} className="text-lg">{todo.title}</p>
            <TodoItem todo ={todo}/>
          ))

          }
        </div>
      </div>
    </main>
  )
}

export default App
