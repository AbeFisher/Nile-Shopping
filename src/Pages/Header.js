import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className = "header">
                <h3>You've heard of Amazon?</h3>
                <h1>Welcome to <span className='nile'>Nile</span></h1>
                <h2>your new favorite shopping destination</h2>
                <p>Sure, the Nile's in Egypt - doesn't make us a pyramid scheme!</p>
                <nav>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/DetailPage">Detail</NavLink> </li>
                        <li> <NavLink to="/SearchPage">Search</NavLink> </li>
                        <li> <NavLink to="/CartPage">Cart</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
