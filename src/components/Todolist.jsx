import { useState } from "react"

const Todolist =()=>{
    const [Todos, setTodos] = useState([])
    const [Input,setInput] = useState("")
    const formsubmit = (e)=>{
        e.preventDefault();
        if(Input.trim()){
            setTodos([...Todos,Input])
            setInput("")
        }
    }
    const inputchange=(e)=>{
        setInput(e.target.value)
    }

    const cleartodolist =()=>{
        // setTodos([]) all Empty
        setTodos(Todos.slice(0,-1)); 
    }
    const deleteTodo = (indexToDelete) => {
    const updatedTodos = Todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
};

 return(
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
    
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
         Todo List
         </h1>

        <form onSubmit={formsubmit} className="space-y-4">
      
         <input
        type="text"
        value={Input}
        onChange={inputchange}
        placeholder="Add a todo"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

    <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>

        <button
          onClick={cleartodolist}
          disabled={Todos.length === 0}
          className={`flex-1 py-2 rounded-lg text-white transition duration-200 ${
            Todos.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Clear
        </button>
    </div>
        
            <ul className="mt-6 space-y-3">
                {Todos.map((todo, index) => (
             <li
            key={index}
            className="flex items-center justify-between bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
            >
            <span className="text-gray-700">{todo}</span>
            <button
            onClick={() => deleteTodo(index)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
            >Delete</button>
            </li>
            ))}
                </ul>
        

        </form>
        
    </div>
    </div>
</>
) 
}
export default Todolist