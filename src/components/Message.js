import React, {Component} from "react";

class Message extends Component{
    
    constructor(){
        super();
        this.state={
            message:'welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'thank you for visiting'
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button type="button" onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    } 
}

export default Message;