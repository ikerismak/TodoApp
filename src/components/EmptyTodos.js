import React from "react";
import '../styles/Empty.css'


function EmptyTodos() {

    return (
        <div className="Empty-container">
             <p className="Empty-text">¡Crea tu primer tarea!</p>
            <img className="Empty-logo" src={require('../assets/icons/notebook.gif')}/>
           
        </div>
    )
}


export { EmptyTodos }