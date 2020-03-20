import React, { Component } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
// import { connect } from 'react-redux';



class Logout extends Component {
    // componentDidMount () {
    //     this.props.onLogout();
    // }

    handleClick=()=>{
        localStorage.removeItem('isAuth');
       
    }

    render () {
        return (
            <Link to="/">
              <button onClick={this.handleClick}>Logout </button>
            </Link>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onLogout: () => dispatch(actions.logout())
//     };
// };

export default withRouter(Logout);