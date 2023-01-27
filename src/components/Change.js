import React, {Component} from "react";

class Change extends Component{
    
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    
    increment(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    
    
    render(){
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.increment()}>click</button>
            </div>

        )
    }
}

export default Change;