import React from "react";
import '../styles/TodosLoading.css'

function TodosLoading(){

    return (


        <div className="LoadingTodo-Container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando tareas...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>



    )
}



export {TodosLoading}