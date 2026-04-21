import { useState } from "react"

const UseStatement=() =>{
    // const [dosti, setdosti] = useState(["ragul","sha","narayan","krishna"])
    // // add,update,remove from an array
    // const Adddostiname = ()=> setdosti([...dosti,"ragul priyan","sha"])
    // const Removedostiname = ()=> setdosti((dosti.filter((test) => test !== "sha")));
    // const Updatedostiname = ()=> {setdosti(dosti.map(f=>f === "sha" ? "shainthuja": f))}
    const [film, setfilm] = useState({
        name: "fince",
        ratings: 7
      })
      const handlechange = ()=>setfilm({...film, ratings:9})
      

  return (
      <div>
        <h1>{film.name}</h1>
        <p>{film.ratings}</p>
        <button onClick={handlechange}>changeratings</button>



      </div>

    // <div>
    //   {dosti.map((f, index)=>(
    //   <li key ={index}>{f}</li>
    //   ))}
    // <button onClick={Adddostiname}>Adddosti</button>
    // <button onClick={Removedostiname}>Removedostiname</button>
    // <button onClick={Updatedostiname}>Updatename</button>
    // </div>
  )
}

export default UseStatement;