import React from "react";
import { Component } from "react";


class Controlledcompo extends Component {

    constructor(){
        super()
        this.state = {
            hk : ""
        }
    }


    submit = (event) =>{
        event.preventDefault()
        // console.log("submit");
        console.log(this.state.hk);
    }
    
    render() { 
        return (
            <>
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.hk} onChange={(e)=>this.setState({hk : e.target.value})}/>
                <input type="submit" />
            </form>
            </> 
        );
    }
}
 
export default Controlledcompo;