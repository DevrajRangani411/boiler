import React, { Component } from 'react'
import {getManageUserData} from '../action/index'
import { connect } from 'react-redux'


class ManageUser extends Component{

  handleClick=()=>{
    const str="Data Recive From ManageUser Reducer and Action : Devraj"
    this.props.getManageUserData(str);
    console.log('ManageUser',this.props.detail)
  }

//   returnJSX = () => {
//     return <div>{this.props.data}</div>;
//   };

    render(){
      
        return(
            <React.Fragment>
                <saction>
                    <p></p>
                    <button onClick={this.handleClick}>Tap Get Data</button>
                    <p></p>
                    {this.props.detail}
                    {/* {this.returnJSX()} */}
                </saction>
                
            </React.Fragment>
        );
    }
}



const mapStateToProps = state => ({
    detail: state.manageUserReducer.detail
})
  
  const mapDispatchToProps = dispatch => ({
    
      // dispatching plain actions
      getManageUserData: payload => dispatch(getManageUserData(payload))
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);
  //export default ManageUser;