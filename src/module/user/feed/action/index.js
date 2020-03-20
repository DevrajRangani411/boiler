import {
    GET_FEED_DETAIL
  } from '../../../../constants/actionTypes';

export function getData(data){
    console.log('action in ',data)
    return {
        type:GET_FEED_DETAIL,
        payload:{data},
    };
}