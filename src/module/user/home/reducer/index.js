import {GET_HOME_DETAIL} from '../../../../constants/actionTypes';

export const INITIAL_STATE = {
    data: null,
  };

export default(state = INITIAL_STATE, action) => {
 
    switch(action.type) {
        case GET_HOME_DETAIL :
            return { 
                ...state,
                data: action.payload.data 
            }
        default:
            return state;
    }
 
}