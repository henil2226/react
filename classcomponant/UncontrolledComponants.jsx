import React from "react";
import { Component } from "react";

class UncontrolledComponants extends Component {

    constructor(){
        super()
        this.state = React.createRef() 
    }


    click = (event) => {
        event.preventDefault()
        console.log("click");
        console.log(this.state.current.value);

    }

    render() { 
        return (
            <>
            <form onSubmit={this.click}>
                <input type="text" ref={this.state}/>
                <input type="submit" />
            </form>
            </>
        );
    }
}
 
export default UncontrolledComponants;