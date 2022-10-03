import React from "react";


function useLocalStorage(itemName,initialValue){

    const [error , setError] =  React.useState(false);
    const [loading , setLoading] =  React.useState(true);
    const [item, setItem] = React.useState(initialValue);
   
    // simular una peticion al backend
  
      React.useEffect(() => {
  
      setTimeout(() => {
  
        try{
  
        
  
            const localStorageItem = localStorage.getItem(itemName);
  
            let parsedItem;
  
            if(!localStorageItem){
  
            
              localStorage.setItem(itemName,JSON.stringify(initialValue))
              parsedItem = initialValue;
  
            }else{
  
              parsedItem = JSON.parse(localStorageItem);
  
              }
  
            setItem(parsedItem);
            setLoading(false);
  
        }catch(error){
  
          setError(error)
  
        }
  
      }, 4000);
  
   });
  
  
  
    // Almacenar
  
  const saveItem = (newItem) =>{
  
    const stringifiedItem = JSON.stringify(newItem);
  
    localStorage.setItem(itemName,stringifiedItem);
  
    setItem(newItem); 
  
  }
  
  
  return {
  
    item,
    saveItem,
    loading,
    error
  
  };
  
  
  }
  
  

  export {useLocalStorage};