import React, { Component } from 'react'
import Logout from '../../../auth/logout/Logout.jsx'
import { Link } from 'react-router-dom';
import { getHomedData } from "../action/index";
import { connect } from "react-redux";



class Home extends Component{

    // componentWillMount(){
    //     const data="Devraj";
    //     this.props.getHomeData(data)
    // }

    render(){
        return(
            <React.Fragment>
                <saction>
                    <ul>
                        <Link to="/">Home</Link>
                       <Link to="/home/feed"><ls>Feed </ls></Link>
                       <Link to="/home/profile"> <ls>Profile</ls></Link>
                       <Logout/>
                    </ul>
                    {/* <p>Data Retrive From Globle State : {this.props.data}</p> */}
                </saction>
            </React.Fragment>
        );
    }
}

const mapsStateToProps = state => ({ 
    data : state.homeReducer.data });

const mapsDispatchToProps = dispatch => ({
    getHomedData: data => dispatch(getHomedData(data))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Home);