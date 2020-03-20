import {
    GET_ABOUTUS_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_ABOUTUS_DETAIL,
        payload:{data},
    };
}