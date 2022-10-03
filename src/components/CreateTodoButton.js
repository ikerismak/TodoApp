import React from "react";

import "../styles/CreateTodoButton.css"


function CreateTodoButton(props) {

    const onClickButton = () => {

        // revisar el stado anterior negando el stado

        props.setOpenModal(prevState => !prevState);

    };

    return (
        <button
            className="CreateTodoButton"

            onClick={onClickButton}

        >
            +

        </button>
    )
}



export { CreateTodoButton }