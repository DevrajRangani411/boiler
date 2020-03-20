import {
    GET_SETTING_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_SETTING_DETAIL,
        payload:{data},
    };
}