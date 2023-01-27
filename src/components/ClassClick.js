import React,{Component} from "react";

class ClassClick extends Component{

    buttonclick(){
        console.log("button clicked ")
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonclick}>click</button>
            </div>
        )
    }
}

export default ClassClick; 