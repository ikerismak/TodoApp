import React from "react";

import '../styles/TodoCounter.css'
import { TodoContext } from "./TodoContext";


function TodoCounter(){

    const {totalToDos, completedToDos} = React.useContext(TodoContext);


    return(

        <h2 className="TodoCounter"> Has completado {completedToDos} de {totalToDos} ToDos</h2>


    )
}



export {TodoCounter};