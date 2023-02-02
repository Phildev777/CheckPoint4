import React from 'react';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <div className="NavBar">

            <div className="menus">

                <ul className="ulNav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/consoles">Consoles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/listeDeTesJeux">Liste de tes jeux</NavLink>

                    </li>

                </ul>

            </div>

        </div>
    );
};

export default NavBar;