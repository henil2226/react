import React from "react";
import { Component } from "react";


const Updatecounter = Origenalcomponant => {



    class Newcomponant extends Component {

        constructor(){
            super()
            this.state = {
                count : 0
            }
        }
    
        increment = () => {
            this.setState({
                count : this.state.count + 11
            })
        }

        render() { 
            return ( 
                <Origenalcomponant  count={this.state.count}  increment = {this.increment}/>
            );
        }
    }
     
    return Newcomponant
}

export default Updatecounter