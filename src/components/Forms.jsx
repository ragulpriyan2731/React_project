// import "./create-forms-component.css"
import { useState, useRef, useEffect, useMemo } from "react"

function CreateFromsComponent(){
    const nameRef = useRef(null);
    const [errors, setErrors] = useState({})
    const [search, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({
        name:"",
        email:"", 
        department: "",
        salary: ""
    })
    const handleInputs = (e) => {
        console.log("event-->", event)


         setForm({
            ...form,
            [e.target.name]: e.target.value,
         })  
         
         setErrors({
            ...errors,
            [e.target.name]: ""
         })
              
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        const validationError = validate()
        setErrors(validationError)

        if(Object.keys(validationError).length === 0){

            setEmployees([...employees, form])
    
                setForm({
                name: "",
                email: "",
                department:"",
                salary:"",
            })
        }
    }
       
        // alert(`Form Submitted Successfully! \nName:${form.name}\nEmail:${form.email} `)     

    //form validation
    const validate = () => {
        let newErrors = {};

        const nameRegx = /^[A-Za-z\s.]/
        if(!form.name){
            newErrors.name = "Employee Name is Required"
        } else if(!nameRegx.test(form.name)){
            newErrors.name = "Employee Name is Invalid"
        }

        if(!form.email){
            newErrors.email = "Email is Required"
        } else if(!/\S+@\S+\.\S+/.test(form.email)){
            newErrors.email = "Invalid email"
        }

        if(!form.department){
            newErrors.department = "Department is Required"
        }

        if(!form.salary) {
            newErrors.salary = "Salary is Required"
        } else if (form.salary <= 0) {
             newErrors.salary = "Salary must greater than 0"
        }

        return newErrors
    }

    useEffect(() =>{
        nameRef.current.focus();
    },[])

    const filteredEmployees = useMemo(() =>{
        console.log("Filtering?")
   
       return employees.filter((emp) => 
        
        emp.name.toLowerCase().includes(search.toLowerCase())
       )
        
    },[employees,search])

    console.log("Filtered-----",filteredEmployees)

    return(
        <>
          <div>
            <div>
                <h2>Employee Form</h2>
                 <form onSubmit={handleSubmit}>

             <div className="forms">
                <div className="fromFields">
                <h3>My Name is</h3>
                <input type="text"  placeholder="Enter Name" name="name" value={form.name}  onChange={handleInputs} required/>
                <p style={{color: "red"}}>{errors.name}</p>
                </div>
                    
                <div className="fromFields">
                <h3>My email is</h3>
                <input type="email" ref={nameRef} name="email" placeholder="Enter Email" value={form.email} onChange={handleInputs} />
                <p  style={{color: "red"}}>{errors.email}</p>
                </div>

                <div className="fromFields">
                <h3>Department</h3>
                <input type="text" name="department" value={form.department}  placeholder="Department" onChange={handleInputs} />
                <p style={{color: "red"}}>{errors.department}</p>
                </div>
                
                <div className="fromFields">
                <h3>Salary</h3>
                <input type="number" name="salary"  value={form.salary}  placeholder="Salary" onChange={handleInputs} />
                <p  style={{color: "red"}}>{errors.salary}</p>
                </div>

                <input  type="text" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Submit</button>
             </div>

            </form>
          <ul>
            {
                filteredEmployees.map((emp,index) => (
                    <li key={index}>
                       
                       <li>{emp.name}</li>
                       <li>{emp.email}</li>
                       <li>{emp.department}</li>
                       <li>{emp.salary}</li>
                    
                       
                       
                       
                    </li>
                ))
            }
          </ul>
            </div>
          </div>

        </>
    )
}
export default CreateFromsComponent