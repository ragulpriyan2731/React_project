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

 return(
        <>
        <h1>Todolist</h1>
        <form onSubmit={formsubmit}>
        <input type="text" value={Input} onChange={inputchange} placeholder="Add a todolist" />
        <button type="submit">Submit</button>
        <button onClick={cleartodolist} disabled={Todos.length === 0}>Clear</button>
        </form>
        <ul>
            {Todos.map((todo, index)=>(
                <p key={index}>{todo}</p>
            ))}
        </ul>
         </>
    )
}
export default Todolist