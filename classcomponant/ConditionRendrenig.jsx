import React from "react"
import { Component } from "react"


class ConditionRendrenig extends Component {

      constructor(){
        super()
        this.state = {
            value : true
        }
      }


    render() { 

        return this.state.value && <h1>this is true</h1>


        // return this.state.value ? <h1>this is true</h1> : <h1>this is false</h1>



        // let chack

        // if (this.state.value) {
        //     chack = <h1>this is true</h1>
        // } else {
        //     chack = <h1>this is false</h1>
        // }
        // return chack



        // if (this.state.value) {
        //     return <><h1>this is true</h1></>
        // } else {
        //     return  <><h1>this is false</h1></>
        // }



        // return (

        //     <>
        //     </>
        // );
    }
}
 
export default ConditionRendrenig;