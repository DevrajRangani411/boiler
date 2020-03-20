import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logout from '../module/auth/logout/Logout.jsx'

class Header extends Component{
    render(){

        return(
            <React.Fragment>
                 <saction>
                 {localStorage.getItem('isAuth')== 'admin' ?
                 
                 <table>
                        <th><Link to="/">Dashboard</Link></th>
                        <th><Link to="/manageusers">ManageUsers</Link></th>
                        <th><Link to="/setting"> Setting</Link></th>
                        <th><Logout/></th>
                    </table>
                 : 
                 null}
                 {localStorage.getItem('isAuth')== 'user' ?
                 
                 <table>
                        <th><Link to="/">Home</Link></th>
                        <th><Link to="/feed">Feed</Link></th>
                        <th><Link to="/profile"> Profile</Link></th>
                        <th><Logout/></th>
                  </table>
                  :null
                }
                    
                </saction>
            </React.Fragment>
        );
    }
}

export default Header;