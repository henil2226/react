import React from "react";
import { Component } from "react";
import Updatecounter from "./Hoc";

class Clickcounter extends Component {

    render() { 
        return (
            <>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increment}>increment</button>
            </>
        );
    }
}
 
export default Updatecounter(Clickcounter);