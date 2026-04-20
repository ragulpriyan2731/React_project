import { useState } from "react"

const Usedreference = () => {
    const [count, setcount]= useState(1)
    const styles = {color: "black", backgroundcolor: "teal", padding: "1rem",}
 return (
    <div>
        <h1>Count: {count}</h1>
        <button style={styles} onClick={()=>{setcount(count +1)}}>add</button> 
        <button style={styles}onClick={()=>{setcount(count -1)}}>minus</button>
     </div>
  )
};

export default Usedreference