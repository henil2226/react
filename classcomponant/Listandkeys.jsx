import React from "react";
import { Component } from "react";


class Listandkeys extends Component {

    constructor(){
       super()
       this.state = {
         list : [1,2,3,4]
       }
    }

    add=()=> {
        this.setState({
            list : [0,1,2,3,4,5,6,7 ] 
        })
    }

    render() { 

        // const item = [1,2,3,4]
            const items = this.state.list.map((e)=><li key={e.toString()}>{e}</li>)

        return (
            <>
              <ul>
                {items}
              </ul>
              <button onClick={this.add}>add</button>
              <h1>{this.props.data}</h1>
               <div>{this.props.children}</div>
        
            </>
        );
    }
}
 
export default Listandkeys;