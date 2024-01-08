import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">LOGO A/S</a>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">basic</button>
          <div className="dropdownContent">
              <NavLink className="Link" to="/">Home</NavLink>
              <NavLink className="Link" to="/about">Om os</NavLink>
              <NavLink className="Link" to="/contact">Kontakt</NavLink>
          </div>
        </div>
        {/* JOSN placeholder */}
        <div className="dropdown">
          <button className="dropbtn">Json Placeholder</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/posts">jsonplaceholder</NavLink>
          <NavLink className="Link" to="/todo">TODO</NavLink>
          <NavLink className="Link" to="/postAdmin">postAdmin</NavLink>
          <NavLink className="Link" to="/photo">Photo</NavLink>
          </div>
        </div>
        {/* SWAPI  */}
        <div className="dropdown">
          <button className="dropbtn">Swapi</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/starships">starships</NavLink>
          </div>
        </div>
           {/*  MONGO  */}
           <div className="dropdown">
          <button className="dropbtn">Mongo</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/Mongotodo">Mongo To do</NavLink>
          <NavLink className="Link" to="/MongoCreatetodo">Mongo create</NavLink>
          <NavLink className="Link" to="/MongoAdmin">Mongo Admin</NavLink>
          </div>
        </div>
        {/* NEWS API */}
        <div className="dropdown">
          <button className="dropbtn">News Api</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/NewsHeadlines">NewsAPi TopHeadlines</NavLink>
          <NavLink className="Link" to="/NewsApi">NewsAPI</NavLink>
          </div>
        </div>
          {/* AIRTABLE API */}
          <div className="dropdown">
          <button className="dropbtn">Airtable</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/Shoppinglist">shoppinglist</NavLink>
          </div>
        </div>
        {/*RAPID API  */}
        <div className="dropdown">
          <button className="dropbtn">Rapid Api</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/Hobbies">Hobbies</NavLink>
          </div>
        </div> 
      {/* OPEN WEATHER API */}
      <div className="dropdown">
          <button className="dropbtn">Open Weather Api</button>
          <div className="dropdownContent">
          <NavLink className="Link" to="/currentWeather">current weather</NavLink>
          <NavLink className="Link" to="/currentWeatherCopy">current weather 2</NavLink>
          <NavLink className="Link" to="/weatherDawa">Weather Dawa</NavLink>
          <NavLink className="Link" to="/weatherMap">Weather Map</NavLink>
          <NavLink className="Link" to="/weatherPollution">Weather poll</NavLink>
          
          </div>
        </div> 
        <NavLink className="Link" to="/admin">ADMIN</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
