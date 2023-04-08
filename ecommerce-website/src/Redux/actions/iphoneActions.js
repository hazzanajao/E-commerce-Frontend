import { ActionTypes } from "../constants/action-types"

/**
 * Our action-types will be implemented here
 ************************************************/

export const setIphones = (iPhones) =>{

    return {
        type: ActionTypes.SET_IPHONES, // The action type we want to perform
        payload:iPhones                // the product data we need to get
    }
}


export const selectedIphones = (iPhone) =>{

    return {
        type: ActionTypes.SELECTED_IPHONES,
        payload:iPhone
    }
}



const removeSelectedIphone = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_IPHONE,
    }
}
export default removeSelectedIphone();
