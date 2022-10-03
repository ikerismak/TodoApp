import React from 'react';

import { TodoContext } from '../components/TodoContext'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { Modal } from '../modal';
import { TodoForm } from '../components/TodoForm';




function AppUI() {

    const {

        loading,
        SearchedToDos,
        completeToDo,
        deleteToDo,
        error,
        openModal,
        setOpenModal,

    } = React.useContext(TodoContext)

    return (

        <React.Fragment>

            <TodoCounter />

            <TodoSearch />






            <TodoList>


                {error && <p> Error al cargar tareas...</p>}
                {loading && <p> Cargando lista de tareas...</p>}

                {(!loading && !SearchedToDos.length) && <p> Crea tu primer tarea! </p>}


                {SearchedToDos.map(items => (

                    <TodoItem
                        key={items.text}
                        text={items.text}
                        completed={items.completed}
                        onComplete={() => completeToDo(items.text)}
                        onDelete={() => deleteToDo(items.text)}
                    />
                ))}

            </TodoList>


            {/* ventana de agregar tareas */}

            {!!openModal && (

                <Modal>

                    <TodoForm />

                </Modal>
            )}



            <CreateTodoButton

                setOpenModal={setOpenModal}


            />


        </React.Fragment>


    );

}

export { AppUI };