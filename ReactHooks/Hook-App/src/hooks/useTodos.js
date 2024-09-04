import { useReducer,useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    //   {
   //     id:new Date().getTime(),
   //     description:'Recolectar la piedra del alma',
   //     done:false
   //     },
   //     {
   //         id:new Date().getTime() * 3,
   //         description:'Recolectar la piedra del Inifinito',
   //         done:false
   //     }
    ];
   
   const init = () =>{
       return JSON.parse(localStorage.getItem('todos')) || []; //Esto permite que se queden guardamos cuando recarguemos
   }


export const useTodos = () => {

    //useTodo
    //todos,handleDelete, handleToggleTodo, handleNewTodo


    const [todos,dispatch] = useReducer(todoReducer,[],init);
    
    //Esto va a servir para guardar cuando mis todos cambiass
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) // Aqui es para guardar en el localstroge
    }, [todos]);
    // aqui termina




    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch(action); // Disparamos la accion del todoReducer
    }

    const handleDeleteTodo = (id) => {  // Esta es para completar una tarea completado o pendiente un TODO
        dispatch({
            type:'[TODO] Remove Todo',
            payload:id
        })
    }

    const handleToggleTodo = (id) =>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        })

    }





  return {
        todos,
        todosCount:todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
  } 
    
  
}


