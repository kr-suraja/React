import React, {Component} from "react";

class UserGreeting extends Component{
    
    constructor(){
        super();
        this.state={
            isLoggedIn :true
        }
    }

  
    
    render(){

        let message
        if(this.state.isLoggedIn){
            message='hello Suraj'
        }
        else{
            message='hello User'
        }

        return(
            <h1>{message}</h1>
        )
    } 
}

export default UserGreeting;