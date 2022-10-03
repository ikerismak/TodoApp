import React from "react";
import "../styles/TodoItem.css"


function TodoItem(props){

    // const onComplete = () => {

    //     alert('se completo la tarea ' + props.text)
        
    // }

    // const onDelete = () => {

    //     alert('borraste la tarea ' +  props.text)
        
    // }

    return(
        <li 

        className="TodoItem">

            <span 

                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick = {props.onComplete}
            > 
             √
            </span>

            <p 
            className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
            >
            {props.text}
            </p>

            <span 
            className="Icon Icon-deleted"
            onClick={props.onDelete}
            >
            X
            </span>

        </li>
    )
}


export {TodoItem};