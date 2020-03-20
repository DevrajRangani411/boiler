import {
    GET_CONTACTUS_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_CONTACTUS_DETAIL,
        payload:{data},
    };
}