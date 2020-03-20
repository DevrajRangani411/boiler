import {
    GET_TERMANDCOND_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_TERMANDCOND_DETAIL,
        payload:{data},
    };
}