import { Component } from "react";

class Classcompointro extends Component {
    render() { 
        return (
            <>
            <h1>Introoooo {this.props.change}</h1>
            <img src={this.props.src} alt="" />
            </>
        );
    }
}
 
export default Classcompointro;