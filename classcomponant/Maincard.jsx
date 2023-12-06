import React from "react";
import { Component } from "react";
import Card from "./Card";


class Maincard extends Component {
    render() { 
        return (
            <>
              <Card img="https://mdbootstrap.com/img/new/standard/nature/115.webp"  newtitel="new 01 cart loding"/>
              <Card img="https://mdbootstrap.com/img/new/standard/nature/114.webp" newtitel="new cart03 loding"/>
              <Card img="https://mdbootstrap.com/img/new/standard/nature/113.webp" newtitel="n loding"/>
              <Card img="https://mdbootstrap.com/img/new/standard/nature/112.webp"  newtitel="nart loding"/>
            </>
        );
    }
}
 
export default Maincard;