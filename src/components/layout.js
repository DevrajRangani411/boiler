import React,{Component} from 'react'
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Footer from './footer.jsx'
import AboutUs from '../module/otherPages/aboutUs/componets/aboutUs.jsx';
import ContactUs from '../module/otherPages/contactUs/componets/contactUs.jsx';
import Term_Cond from '../module/otherPages/term&condition/componets/term&condition.jsx';
import Dashboard from '../module/admin/dashroard/component/dashboard.jsx';
import ManageUser from '../module/admin/manageUser/component/manageUsers.jsx';
import Setting from '../module/admin/setting/component/setting.jsx';
import Home from '../module/user/home/component/home.jsx';
import Feed from '../module/user/feed/component/feed.jsx';
import Profile from '../module/user/profile/component/profile.jsx';
import Login from '../module/auth/login/components/index.jsx';
import Header from './header.jsx';




class Layout extends Component{

    // state={
    //     auth:'admin',
    //     user:{},
    //     admin:{}
    // }
     
    // componentDidUpdate(){
    //     this.setState({
    //         auth:localStorage.getItem('isAuth')
    //     })
    // }

    render(){
         const auth = localStorage.getItem('isAuth');
        console.log('Local',auth)


        return(
            <React.Fragment>
            <BrowserRouter>
            
                <switch>
                    <Route path="/aboutUs" exact>
                        <AboutUs/>
                    </Route>

                    <Route path="/contactUs" exact>
                        <ContactUs/>
                    </Route>

                    <Route path="/termAndCondition" exact>
                        <Term_Cond/>
                    </Route>

                    

                    <Route path="/" exact>
                        <Login/>
                    </Route>   

                    {/* <Header/> */}

                    <Route path="/dashboard" >
                        <Dashboard/>
                    </Route>

                    <Route path="/dashboard/manageusers" exact>
                        <ManageUser/>
                    </Route>

                    <Route path="/dashboard/setting" exact>
                        <Setting/>
                    </Route>

                    <Redirect to="/"/>

                    <Route path="/home">
                        <Home/>
                    </Route>

                    <Route path="/home/feed" exact>
                        <Feed/>
                    </Route>

                    <Route path="/home/profile" exact>
                        <Profile/>
                    </Route>

                    <Redirect to="/"/>
                    
                </switch>
                <Footer />
             </BrowserRouter>
            </React.Fragment>
        );
    } 
}

export default Layout;