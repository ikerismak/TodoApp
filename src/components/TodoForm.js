import React from 'react'
import { TodoContext } from './TodoContext'
import '../styles/TodoForm.css'

export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {

        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    const onChange = (event) => {

        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {

        setOpenModal(false)



    }

    const onSubmit = (event) => {

        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)


    }

    return (


        <form onSubmit={onSubmit}>

            <label> Escribe una nueva tarea </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Introduce la tarea...'
            />
            <div className='TodoForm-buttonContainer'>

                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}>
                    Cancelar
                </button>

                <button
                    className=' TodoForm-button TodoForm-button--add '
                    type='submit'>
                    Agregar
                </button>

            </div>

        </form>


    )
}
