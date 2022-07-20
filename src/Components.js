import { useState } from "react";


export const TodoApp = ()=>{
    const [tasks,setTask] = useState({
        sr:"",
        taskAssign:"",
    });
    const handleInput = (e)=>{
        const {name,value} = e.target
        setTask({...tasks, [name]:value})
    }
    
}