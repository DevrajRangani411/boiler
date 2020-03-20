import { combineReducers } from "redux";
import manageUserReducer from '../module/admin/manageUser/reducer/index'
import settingReducer from '../module/admin/setting/reducer/index'
import dashboardReducer from '../module/admin/dashroard/reducer/index'
import feedReducer from '../module/user/feed/reducer/index'
import profileReducer from '../module/user/profile/reducer/index'
import homeReducer from '../module/user/home/reducer/index'
import contactUsReducer from '../module/otherPages/contactUs/reducer/index'
import aboutUsReducer from '../module/otherPages/aboutUs/reducer/index'
import term_CondReducer from '../module/otherPages//term&condition/reducer/index'



const rootReducer = combineReducers({
        manageUserReducer,
        settingReducer,
        dashboardReducer,
        homeReducer,
        feedReducer,
        profileReducer,
        aboutUsReducer,
        contactUsReducer,
        term_CondReducer,
        
    });

export default rootReducer;

