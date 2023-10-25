import { Component } from "react";
import { Routes, Route} from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro"
import Classprops from "./Classprops";
import Classstate from "./Classstate";
import ConditionRendrenig from "./ConditionRendrenig";
import UncontrolledComponants from "./UncontrolledComponants";
import Controlledcompo from "./Controlledcompo";
import Listandkeys from "./Listandkeys";
import Classcompotionandinheritance from "./Classcompotionandinheritance";
import Maincounter from "./HOC/Maincounter";
import Maincard from "./Maincard";

class Classcomporoutes extends Component {
    render() { 
        return (
            <>
            <Routes>
                <Route path="/" element={<Classcompomenu/>}>
                    <Route path="ci" element={<Classcompointro/>}/>
                    <Route path="Classprops" element={<Classprops/>}/>
                    <Route path="Classstate" element={<Classstate/>}/>
                    <Route path="ConditionRendrenig" element={<ConditionRendrenig/>}/>
                    <Route path="UncontrolledComponants" element={<UncontrolledComponants/>}/>
                    <Route path="Controlledcompo" element={<Controlledcompo/>}/>
                    <Route path="Listandkeys" element={<Listandkeys/>}/>
                    <Route path="Classcompotionandinheritance" element={<Classcompotionandinheritance/>}/>
                    <Route path="Maincounter" element={<Maincounter/>}/>
                    <Route path="Maincard" element={<Maincard/>}/>
                </Route>
            </Routes>
            </>
        );
    }
}
 
export default Classcomporoutes;