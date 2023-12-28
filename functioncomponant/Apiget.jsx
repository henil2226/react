import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Apiget  = () => {

    const [getdata , setGetdata] = useState([]) 


    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data)=> {
            data.json().then((maindata)=>{
                console.log(maindata);
                setGetdata(maindata)

            })
        })
    },[])

    

    return ( 
        <>
        <h1>Apiget</h1>
           
           <table>
            <tr>
                <td>username</td>
                <td>id</td>
                <td>titel</td>
                <td>completed</td>
            </tr>

          {
            getdata.map((item)=> 
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed.toString()}</td>
                </tr>
            

            )
          }
           </table>

        </>
     );
}
 
export default Apiget;