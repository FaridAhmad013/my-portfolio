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

        case "SET_DETAIL_IMAGE":
            return {
                ...state,
                detailImage: action.payload
            }

        case "SET_DETAIL_PROJEK":
            return {
                ...state,
                detailProjek: action.payload
            }
            
        case "SET_DATA_IMAGE":
            return {
                ...state,
                dataImage: action.payload
            }
        default:
            break;
    }
}