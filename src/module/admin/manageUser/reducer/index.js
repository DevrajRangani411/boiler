import * as actionTypes from '../../../../constants/actionTypes';
import {GET_MANAGEUSER_DETAIL} from '../../../../constants/actionTypes';

const INITIAL_STATE = {
  detail: null
};


export default (state = INITIAL_STATE, action) => {
    console.log('Reducer',action);
  switch (action.type) {
    case GET_MANAGEUSER_DETAIL:
      console.log('Reducer Case:',action.type);
      return {
        ...state,
        detail: action.payload,
      }
    default:
      return state;
  }
};

