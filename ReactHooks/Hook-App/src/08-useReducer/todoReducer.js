export const todoReducer = (initialState=[],action) =>{
    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState,action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); // usamos el filter por que regresa un nuevo arreglo

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo; // Siempre debemos regresar un todo
            })

            
    
        default:
            return initialState;
    }
}