import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";


const TodoContext = React.createContext();


function TodoProvider(props) {

    const 
  {
    item: toDos,
    saveItem: saveTodos,
    loading,
    error

  } = useLocalStorage('TODOS_V1',[]);

  const [openModal,setOpenModal] =  React.useState(false)

  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = toDos.filter( Element => Element.completed === true).length;

  const totalToDos = toDos.length;

  let SearchedToDos = [];

  if(!searchValue.length >= 1){

    SearchedToDos =  toDos;

  }

  else{

    SearchedToDos = toDos.filter(Element => {

      const toDoText = Element.text.toLocaleLowerCase();

      const searchText = searchValue.toLocaleLowerCase();

      return toDoText.includes(searchText);

    });    

  };

  const addTodo = (text) => {

    const newTodos = [...toDos];

    newTodos.push({

      completed: false,
      text,

    });
    
    saveTodos(newTodos);

  };

// macar todos completados

  const deleteToDo = (text) => {

    const todoIndex = toDos.findIndex(Element => Element.text === text);

    const newTodos = [...toDos];

    newTodos.splice(todoIndex,1);

    saveTodos(newTodos);
  };

  const completeToDo = (text) => {

    const todoIndex = toDos.findIndex(Element => Element.text === text);

    const newTodos = [...toDos];

    newTodos[todoIndex] = {

      text: toDos[todoIndex].text ,
      completed : true

    }

    saveTodos(newTodos);

  };

  

    return(

        <TodoContext.Provider value = {{

            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            SearchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addTodo,


        }}>
        

            {props.children}

        </TodoContext.Provider>

    )

}






export {TodoProvider,TodoContext}