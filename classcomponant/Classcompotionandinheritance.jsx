import React from "react";
import { Component } from "react";
import Listandkeys from "./Listandkeys"


class Classcompotionandinheritance extends Component {

    render() { 

        let cast = "patel nam to suna hoga" 
        return (
            <>
            <h1>Classcompotionandinheritance</h1>
            <Listandkeys  data={cast}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate doloremque delectus possimus neque qui.</p>   
             <button>don't touch me</button> 
            </Listandkeys>
            </>
        );
    }
}
 
export default Classcompotionandinheritance;