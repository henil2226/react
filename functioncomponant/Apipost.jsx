import React from "react";
import { useState , useEffect} from "react";

const Apipost = () => {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [age , setAge] = useState("")
    const [getdata , setGetdata] = useState([])

    const submit = () => {
        // console.log(username , password , age);

        let data ={username , password , age}
        console.log(data);

        fetch("  http://localhost:5002/user" ,{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)

        }).then((data)=> {
            data.json().then((maindata)=>{
                console.log(maindata);
                setGetdata(maindata)

            })
        })

       
    }

    useEffect(()=> {
        fetch("http://localhost:5002/user").then((data)=> {
            data.json().then((maindata)=>{
                console.log(maindata);
                setGetdata(maindata)

            })
        })
    },[])



    return ( 
    <>
    <h1>Apipost</h1>
    Username <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br />
    Password <input type="password" placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)} />  <br />
    age <input type="number" placeholder="age"  value={age} onChange={(e)=>setAge(e.target.value)}  /> <br />
    <button onClick={submit}>submit</button>


    <table>
            <tr>
                <td>id</td>
                <td>username</td>
                <td>password</td>
                <td>age</td>
            </tr>

          {
            getdata.map((item)=> 
                <tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.age}</td>
                </tr>
            

            )
          }
           </table>

    </>
     );
}
 
export default Apipost;