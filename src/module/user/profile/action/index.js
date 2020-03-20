import {
    GET_PROFILE_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_PROFILE_DETAIL,
        payload:{data},
    };
}