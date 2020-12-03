


const initialState = {

    todos: [{ id: 1, description: "react-hooks", isDone: false, edit: false }, { id: 2, description: "react-redux", isDone: false, edit: false }],
   taskFilter:"Liste"
}


const Reducer = (state = initialState, action) => {
    console.log("reducer", state, action);
    switch (action.type) {
        case "Add":
            return {...state,  todos: [...state.todos, action.text]}
        case 'Done_Not':
            
        return {...state, todos: action.arr}
            
            case 'Modification':

            return {...state, todos: action.arr}

            case 'Edit':
            return { ...state, todos: action.arr}
           
            case 'Filter':
                return {...state, taskFilter:action.payload}
               
                default:
            return state

    }
}


export default Reducer;