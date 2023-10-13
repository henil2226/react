import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Examples = () => {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-6 ">
                        <Link to="./classcomponant">Class Component</Link>
                    </div>
                    <div className="col-6">
                        <Link to="./functionalcomponat">Functional Component</Link>
                    </div>
                </div>
                <div className="row my-3"> 
                    <div className="col" >
                        <Outlet></Outlet>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Examples;