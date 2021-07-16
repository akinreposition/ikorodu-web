import { ENQUIRY_FORM } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, action) => {
     switch(action.type){
         case ENQUIRY_FORM:
             return {
                 ...state,
                 item: action.payload
             }
         default:
             return state;
     }
}