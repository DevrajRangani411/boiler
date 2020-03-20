import React, { Component } from 'react'
import { Redirect, withRouter} from 'react-router-dom';

class Login extends Component{

    handleUser=(e)=>{
        console.log("Value",e.target.value);
        const isAuth=e.target.value;
        localStorage.setItem('isAuth',isAuth);
        
        if(isAuth ==='admin'){
            this.props.history.push('/dashboard');}
            // <Redirect to="/dashboard"/>}
        if(isAuth ==='user'){
            this.props.history.push('/home');}
    }

    render(){
        return(
            <div>
            {localStorage.getItem('isAuth')== 'admin' ? 
                   
                     <Redirect to='/dashboard' />
                     
            :

            (localStorage.getItem('isAuth')=='user')? <Redirect to="/home" />  

            :

                <form style={{textAlign:'center'}}>
                 
                    <input type="radio" name="users" value="admin" onClick={(e)=>this.handleUser(e)}/>
                    <label for="users">Admin </label> 
                    
                    <input type="radio" name="users" value="user" onClick={(e)=>this.handleUser(e)}/>
                    <label for="users">User </label> 
                    
                    {/* <input type="submit" name="Login" /> */}
                </form>
               
            }
            </div>
            
        );
    }
}

export default withRouter(Login);