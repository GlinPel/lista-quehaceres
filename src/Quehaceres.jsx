import React, { useEffect, useState } from 'react'
import Form from './Form'
import Tarea from './Tarea'

const Quehaceres = () => {
    const [tareas, setTareas] = useState([]);
    useEffect(() => {
        const existTareas = localStorage.getItem("TAREAS");
        if(existTareas){
            setTareas(JSON.parse(localStorage.getItem("TAREAS")));
        }
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h2>Mis tareas</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    {tareas.map( (tarea, index) => (
                        <Tarea 
                            key={index}
                            tarea={tarea}
                            id={index}
                            tareas={tareas}
                            setTareas={setTareas}
                        />
                    ))}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <Form setTareas={setTareas} tareas={tareas}/>
                </div>
            </div>
        </div>
    )
}

export default Quehaceres