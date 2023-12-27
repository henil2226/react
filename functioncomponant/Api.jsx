import React, { useEffect } from "react";

const Api = () => {

    useEffect(()=>{
      
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            console.log(result);
            result.json().then((res)=>{
                console.log(res);
            })
        })
       
    },[])
    
    return ( 
        <>
        <h1>Api</h1>
        </>
     );
}
 
export default Api;