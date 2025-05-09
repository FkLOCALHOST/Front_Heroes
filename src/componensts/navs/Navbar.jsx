import React, { useState } from "react";
import '../../assets/Navbar.css'
import logotipoHeroes from "../../assets/logotipoHeroes.png"

export const Navbar = () => {


    return (
        <nav className="navbar">
        <div className="navbar-content">
            <img src={logotipoHeroes} alt="Logo" />
            <span className="logotipo">
                <h1 className="titleNav">SUPERHÉROES API</h1>
            </span>
            <input 
            className="search-bar-client"
            type="text"
            placeholder="Buscar heroe" />
            
        </div>
        </nav>
    )
}