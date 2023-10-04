import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Contact from "./Contact"
import Info from "./Info"
import { Suspense } from "react";
import Examples from "./Examples";
import Classcomporoutes from "./classcomponant/Classcomporoutes";

const About = lazy(()=>import("./About"))

const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <>
        <Navbar/>
        <Home/>
        </>
    },
    {
        path : "/about",
        element : <> <Navbar/>
        <Suspense fallback={<h1>loding.............loding.........wait</h1>}>
            <About/>
        </Suspense>
        </>
    },

    {
        path : "/contact",
        element : <> <Navbar/><Contact/></>
    },
    {
        path : "/info",
        element : <> <Navbar/><Info/></>
    },
    {
        path : "/examples",
        element : <> <Navbar/><Examples/></>,
        children : [
            {
                path : "classcomponant/*",
                element: <>
                 <Classcomporoutes/>
                </>
            }
        ]
    }
    
    
])

export default Mainrouter