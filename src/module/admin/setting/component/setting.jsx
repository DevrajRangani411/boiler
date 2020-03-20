import React, { Component } from 'react'
import { getData } from "../action/index";
import { connect } from "react-redux";


class Setting extends Component{

    componentWillMount(){
        const data="Devraj";
        this.props.getData(data)
        console.log('setting:',this.props.data)
    }

    returnJSX = () => {
        console.log("nhi hua", this.props);
        return <div>{this.props.data}</div>;
      };

    render(){
        return(
            <React.Fragment>
                <saction>
                    <p></p>
                    <p></p>
                    <p>Setting User Page.</p>
                    <p>Data Retrive From Globle State : {this.props.data}</p>
                    {/* {this.returnJSX()} */}
                </saction>
                
            </React.Fragment>
        );
    }
}


const mapsStateToProps = state => ({ 
    data : state.settingReducer.data });

const mapsDispatchToProps = dispatch => ({
  getData: data => dispatch(getData(data))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Setting);

