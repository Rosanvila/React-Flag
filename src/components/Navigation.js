import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : ""}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>
                    <li>About</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;