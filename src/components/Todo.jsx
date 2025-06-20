import React, { useState } from "react";
import './Todo.css';

const Todo = () => {

    const [input,setInput] = useState("");
    const [tasks,setTasks] = useState([]);

    const handle = () => {
        if(input.trim() !== ""){
            setTasks([...tasks,input]);
            setInput("");
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return(
        <div>
            <input value={input} onChange={handleChange} placeholder="Enter Task"/>

            <button onClick={handle}>Add</button>

            <ul>
                {tasks.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;