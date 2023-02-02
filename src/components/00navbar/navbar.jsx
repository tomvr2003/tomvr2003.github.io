import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../00navbar/navbar.css';

const Navbar = () => {
    const menuItems = [
        {
            title: "Home",
            url: "#",
            cName: "navbar-link-1"
        },
        {
            title: "Projecten",
            url: "#section-2",
            cName: "navbar-link-2"
        },
        {
            title: "Contact",
            url: "#section-3",
            cName: "navbar-link-3"
        }
    ]

    const cheese = ()=> {
        const hamburger = document.querySelector("#hamburger");
        const menuContainer = document.querySelector(".menu-container");
        const links = document.querySelector(".un-list");
        console.log(hamburger)

        hamburger.classList.toggle("active")
        menuContainer.classList.toggle("active")
        links.classList.toggle("active")
    }

    return(
        <header className='header'>
            <div className="nav-left">
                <h1 className='nav-title'>Tom</h1>
                <h1 className='nav-title oneLetter'>T</h1>
            </div>
            <div className="nav-right">
                <div onClick={() => cheese()} id='hamburger' className='hamburger'>
                    <span className='bar-1'></span>
                    <span className='bar-2'></span>
                    <span className='bar-3'></span>
                </div>
                <div className="menu-container">
                    <ul className='un-list'>
                        {menuItems.map((item, index) => {
                                    return (
                                        <li onClick={() => cheese()} className='list' key={index}>
                                            <a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                                <p className='menu-text menu-placer'>Informatie</p>
                                <p className='menu-text text-fade'>06-14525591</p>
                                <p className='menu-text text-fade'>tomvanrossum7@gmail.com</p>
                                <p className='menu-text'>Nijmegen, Nederland</p>
                    </ul>
                </div>
            </div>
        </header>
        
    )
}

export default Navbar;