import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const Navbar = () => {

    return (


        <nav className='navbar text-white'>
            <div className='navbar-start'>
                <div>
                    <a href="#">LOGO A/S</a>
                </div>

                <div className='Links'>
                    <NavLink className="Link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="Link" to="/about">
                        Om os
                    </NavLink>
                    {/* NEWS API */}
                    <NavLink className="Link" to="/NewsHeadlines">
                        NewsAPi TopHeadlines
                    </NavLink>
                    <NavLink className="Link" to="/contact">
                        Kontakt
                    </NavLink>
                    {/* JSON PLACEHOLDER */}
                    <NavLink className="Link" to="/posts">
                        jsonplaceholder
                    </NavLink>
                    <NavLink className="Link" to="/photo">
                        Photo
                    </NavLink>
                    <NavLink className="Link" to="/todo">
                        TODO
                    </NavLink>
                    <NavLink className="Link" to="/postAdmin">
                        postAdmin
                    </NavLink>
                    {/* SWAPI */}
                    <NavLink className="Link" to="/starships">
                        starships
                    </NavLink>
                    {/* NEWSAPI */}
                    <NavLink className="Link" to="/NewsApi">
                        NewsAPI
                    </NavLink>
                    {/* RAPIDAPI */}
                    <NavLink className="Link" to="/Hobbies">
                        Hobbies
                    </NavLink>
                    {/* ADMIN */}
                    <NavLink className="Link" to="/admin">
                        ADMIN
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar