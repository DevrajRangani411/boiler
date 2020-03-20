import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../../auth/logout/Logout.jsx'
import { getDashboardData } from "../action/index";
import { connect } from "react-redux";

class Dashboard extends Component{

    // componentWillMount(){
    //     const data="Devraj";
    //     this.props.getDashboardData(data)
    // }

    render(){
        return(
            <React.Fragment>
                <saction>
                    <table>
                        <th> <Link to="/">Dashboard</Link></th>
                        <th><Link to="/dashboard/manageusers">ManageUsers</Link></th>
                        <th> <Link to="/dashboard/setting"> Setting</Link></th>
                        <th><Logout/></th>
                    </table>
                    {/* <p>Data Retrive From Globle State : {this.props.data}</p> */}
                </saction>
            
            </React.Fragment>
        );
    }
}

const mapsStateToProps = state => ({ 
    data : state.dashboardReducer.data });

const mapsDispatchToProps = dispatch => ({
    getDashboardData: data => dispatch(getDashboardData(data))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Dashboard);