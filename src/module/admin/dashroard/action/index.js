import {
    GET_DASHBOARD_DETAIL
  } from '../../../../constants/actionTypes';

export function getDashboardData(data){
    console.log('action in ',data)
    return {
        type:GET_DASHBOARD_DETAIL,
        payload:{data},
    };
}