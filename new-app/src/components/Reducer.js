


const initialState = {

    todos: [{ id: 1, description: "react-hooks", isDone: false, edit: false }, { id: 2, description: "react-redux", isDone: false, edit: false }],
   
}


const Reducer = (state = initialState, action) => {
    console.log("reducer", state, action);
    switch (action.type) {
        case "Add":
            return {
                todos: [...state.todos, action.text]
            }
        case 'Done_Not':
            return {
                todos: action.arr
            }
            case 'Modification':
            return {
                todos: action.arr
            }
            case 'Edit':
            return {
                todos: action.arr
            }
            case 'Done':
            return {
                todos: action.filter
            }
            case 'Not':
            return {
                todos: action.filter
            }
        default:
            return state

    }
}


export default Reducer;