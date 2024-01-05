import React from "react";
import { memo } from "react";

const Childcallback = () => {
    console.log("Childcallback");
    return ( 
        <>
        {/* <h1>Childcallback</h1> */}
        </>
     );
}
 
export default memo(Childcallback);