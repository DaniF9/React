const initialState = [{  //Esto es mi estado inicial
    id:1,
    todo:'Recolertar la piedra del Alma',
    done:false,
}]



const todoReducer = (state = initialState, action = {}) =>{ // La action es lo que siempre queremos que haga

        if(action.type === '[TODO] add todo'){
            return [...state,action.payload]
        }

    return state
}


let todos = todoReducer();

// todos.push({   ESTO NO SE DEBE HACER
//     is:2,
//     todo:'Recolectar la piedra del poder',
//     done:false
// })



//Lo ideal es hacer esto 

const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
}

const addTodoAction = {
    type:'[TODO] add todo', //esta es la accion
    payload: newTodo, // Esta es la accion que queremos que haga
}


todos = todoReducer(todos,addTodoAction)

console.log({state: todos})