import {
    GET_MANAGEUSER_DETAIL
  } from '../../../../constants/actionTypes';
  

  
   const getManageUserData = payload => {
       {console.log('ACTION --->',payload)}
    return {
      type: GET_MANAGEUSER_DETAIL,
      payload,
    }
  }
  
  export {getManageUserData};

  