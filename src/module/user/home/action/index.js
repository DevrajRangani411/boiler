import {
    GET_HOME_DETAIL
  } from '../../../../constants/actionTypes';

export function getHomeData(data){
    console.log('action in ',data)
    return {
        type:GET_HOME_DETAIL,
        payload:{data},
    };
}