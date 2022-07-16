export const Action = (state, action) => {
    switch (action.type) {
        case "SET_MESSAGE":
        return {
            ...state,
             message: action.payload 
            }    

        case "SET_TOGGLE":
            return {
                ...state,
                toggle: action.payload
            }
    
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }

        case "SET_DISABLED": 
            return {
                ...state,
                disabled: action.payload
            }
            
        default:
            break;
    }
}