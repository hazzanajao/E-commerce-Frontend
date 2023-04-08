/* Reducer will always take the initial assigned state and actions*/

import {ActionTypes} from "../constants/action-types";

const initialState = {

    iPhones : [ ]
}

export const iPhoneReducer = (state =initialState, {type, payload} ) => {

    switch (type){
        case ActionTypes.SET_IPHONES:
            return { ...state, iPhones: payload };
        default:
            return state;
    }

}

const selectedIphonesReducer = (state = {}, { type, payload }) => {

    console.log(type);

    switch (type) {
        case ActionTypes.SELECTED_IPHONES:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_IPHONE:
            return {};
        default:
            return state;
    }

}

export default selectedIphonesReducer;
