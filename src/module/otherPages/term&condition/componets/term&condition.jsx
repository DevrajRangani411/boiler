import React, { Component } from 'react'
import { getData } from "../action/index";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class Term_Cond extends Component{

    componentWillMount(){
        const data="Devraj";
        this.props.getData(data)
        console.log('Term_Cond:',this.props.data)
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
                    <p>Term_Cond User Page.</p>
                    <p>Data Retrive From Globle State : {this.props.data}</p>
                    {/* {this.returnJSX()} */}
                </saction>
                
            </React.Fragment>
        );
    }
}


const mapsStateToProps = state => ({ 
    data : state.term_CondReducer.data });

const mapsDispatchToProps = dispatch => ({
  getData: data => dispatch(getData(data))
});

export default connect(mapsStateToProps, mapsDispatchToProps)(Term_Cond);

