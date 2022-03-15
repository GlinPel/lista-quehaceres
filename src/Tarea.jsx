import React from 'react'

const Tarea = ({id, tarea, setTareas, tareas}) => {
    function completarTarea(){
        const tareasCompletadas = tareas.map( (element, index) => {
            if(index === id){
                element.completed = !element.completed;
                return element;
            }else{
                return element;
            }
        })
        setTareas(tareasCompletadas);
        localStorage.setItem("TAREAS",JSON.stringify(tareasCompletadas));
    }
    function eliminarTarea(){
        const tareasFiltradas = tareas.filter( (element, index) => index !== id);
        setTareas(tareasFiltradas);
        localStorage.setItem("TAREAS",JSON.stringify(tareasFiltradas));
    }
    return (
        <div className="row g-3 align-items-center m-1">
            <div className="col-auto">
                <input type="checkbox" className="form-check-input" onChange={completarTarea}/>
            </div>
            <div className="col-auto">
                <label className={`col-form-label ${tarea.completed ? "text-muted completada" : null }`}>{tarea.tarea}</label>
            </div>
            <div className="col-auto">
                <button className="btn btn-dark" onClick={eliminarTarea}>Delete</button>
            </div>
        </div>
    )
}

export default Tarea