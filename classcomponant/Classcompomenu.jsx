import { Component } from "react";
import { Link, Outlet } from "react-router-dom";



class Classcompomenu extends Component {
    
    render() { 
        return (
            <>
            <ul>
                   <li><Link to="ci">class intro</Link></li>
                   <li> <Link to="Classprops">Classprops</Link></li>
                   <li> <Link to="Classstate">Classstate</Link></li>
                   <li> <Link to="ConditionRendrenig">ConditionRendrenig</Link></li>
                   <li> <Link to="UncontrolledComponants">UncontrolledComponants</Link></li>
                   <li> <Link to="Controlledcompo">Controlledcompo</Link></li>
                   <li> <Link to="Listandkeys">Listandkeys</Link></li>
                   <li> <Link to="Classcompotionandinheritance">Classcompotionandinheritance</Link></li>
                   <li> <Link to="Maincounter">Maincounter</Link></li>
                   <li> <Link to="Maincard">Maincard</Link></li>
            </ul>
            <Outlet></Outlet>
            </>
        );
    }
}
 
export default Classcompomenu ;