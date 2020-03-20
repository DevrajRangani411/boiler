import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <ul>
                   <Link to="/aboutUs"> <ls>About US </ls></Link>
                   <Link to="/contactUs"> <ls>Contact US </ls></Link>
                   <Link to="/termAndCondition"> <ls>Term & Condition </ls></Link>
                </ul>
            </React.Fragment>
        );
    }
}

export default Footer;