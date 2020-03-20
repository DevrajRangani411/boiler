import React, { Component } from 'react'
import { getData } from "../action/index";
import { connect } from "react-redux";


class ContactUs extends Component{

    componentWillMount(){
        const data="Devraj";
        this.props.getData(data)
        console.log('ContactUs:',this.props.data)
    }

    returnJSX = () => {
        console.log("nhi hua", this.props);
        return <div>{this.props.data}</div>;
      };

    render(){
        return(
            <React.Fragment>
                <saction>
                <Link to="/">Home</Link>
                    <p></p>
                    <p></p>
                    <p>ContactUs User Page.</p>
                    <p>Data Retrive From Globle State : {this.props.data}</p>
                    {/* {this.returnJSX()} */}
                </saction>
                
            </React.Fragment>
        );
    }
}


const mapsStateToProps = state => ({ 
    data : state.contactUsReducer.data });

const mapsDispatchToProps = dispatch => ({
  getData: data => dispatch(getData(data))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(ContactUs);

