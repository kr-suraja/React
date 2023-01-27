import React, {Component} from "react";

class Form extends Component{

    constructor(){
        super();
        this.state={
            username:''
        }
    }

    handlerUserNameChange = (event) => {
            this.setState({
                username: event.target.value
            })
    }
    
    render(){
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username}  onChange={this.handlerUserNameChange}/>
                </div>
            </form>
        )
    } 
}

export default Form;