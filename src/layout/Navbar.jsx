import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-white">
      <div className="navbar">
        <div className="navbar-start">
          {/* <div className="dropdown">
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div> */}
          <a className="btn btn-ghost text-xl">LOGO A/S</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>home</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/about">
                      Om os
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/contact">
                      Kontakt
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>jsonPlaceholder</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/posts">
                      jsonplaceholder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/todo">
                      TODO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/postAdmin">
                      postAdmin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/photo">
                      Photo
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>SWAPI</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/starships">
                      starships
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>NEWS api</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/NewsHeadlines">
                      NewsAPi TopHeadlines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/NewsApi">
                      NewsAPI
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>RAPID-API</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/Hobbies">
                      Hobbies
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>OpenWeather</summary>
                <ul className="p-2">
                  <li>
                    <NavLink className="Link" to="/currentWeather">
                      current weather
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/currentWeatherCopy">
                      current weather 2
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink className="Link" to="/weatherDawa">
                Weather Dawa
              </NavLink>
            </li>
            <li>
              <NavLink className="Link" to="/weatherMap">
                Weather Map
              </NavLink>
            </li>
            <li>
              <NavLink className="Link" to="/admin">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div>
          <a href="#">LOGO A/S</a>
        </div> */
}
{
  /* NEWS API */
}
{
  /* <NavLink className="Link" to="/NewsHeadlines">
            NewsAPi TopHeadlines
          </NavLink> */
}
{
  /* JSON PLACEHOLDER */
}
{
  /* <NavLink className="Link" to="/posts">
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
          </NavLink> */
}
{
  /* OPEN WEATHER */
}
{
  /* <NavLink className="Link" to="/currentWeather">
            current weather
          </NavLink> */
}
{
  /* SWAPI */
}
{
  /* <NavLink className="Link" to="/starships">
            starships
          </NavLink> */
}
{
  /* NEWSAPI */
}
{
  /* <NavLink className="Link" to="/NewsApi">
            NewsAPI
          </NavLink> */
}
{
  /* RAPIDAPI */
}
{
  /* <NavLink className="Link" to="/Hobbies">
            Hobbies
          </NavLink> */
}
{
  /* ADMIN */
}
{
  /* <NavLink className="Link" to="/admin">
            ADMIN
          </NavLink> */
}
