import React, { useState, useEffect } from 'react';
import logo from './logo.png';

function Navbar() {
    const [ change, setChange ] = useState();
    const [ time  , setTime   ] = useState();

    setInterval(() => {
        setChange(Math.random());
    }, 1000);
    
    useEffect(() => {
        const today = new Date();
        setTime(today.toLocaleTimeString());
    }, [change]);   //jese hee 'change' ki value update hogi wese hi ye "useEffect" chalega

    return (
        <nav className="navbar">
            <figure>
                <img src={logo} className="d-inline-block align-top" alt=""/>
                <span className="logo" id="name"> covid-19 </span>
            </figure>
            <p className="logo" id="time"> {time} </p>
        </nav>
    )
}

export default Navbar;