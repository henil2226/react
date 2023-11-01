import React from "react";
import { Component } from "react";
// import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';



class Classstate extends Component {

    constructor(){
        super()
        this.state = {
            num : 0
        }
    }

    increment = () =>{
        this.setState({
            num : this.state.num + 1
        })
    }

    decrement = () =>{
        this.setState({
            num : this.state.num - 1
        })
    }

    into2 = () =>{
        this.setState({
            num : this.state.num * 2
        })
    }
    reset = () =>{
        this.setState({
            num : this.state.num = 0
        })
    }



    render() { 
        return (
            <>
              <h1>classstate</h1>
              <h1>{this.state.num}</h1>
              <button  onClick={this.increment}>+</button>
              <button onClick={this.decrement}>-</button>
              <button onClick={this.into2}>*2</button>
              <button onClick={this.reset}>CE</button>
            </>
        );
    }
}
 
export default Classstate ;