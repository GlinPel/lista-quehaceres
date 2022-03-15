import React, { useState } from 'react'

const Form = ({tareas, setTareas}) => {
    const [tarea, setTarea] = useState("")
    function SubmitForm(e){
        e.preventDefault();
        const tareaObj = {
            tarea,
            completed: false
        }
        const newTareas = [...tareas, tareaObj];
        setTareas(newTareas);
        localStorage.setItem("TAREAS",JSON.stringify(newTareas));
    }
    return (
        <form onSubmit={SubmitForm}>
            <div className="mb-3">
                <input type="text" className="form-control" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form