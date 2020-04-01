import React, {useState} from 'react';

import './style.scss';

import  { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import classnames from 'classnames';

import { signInAction } from '../../action';


const Header = ({
    siginIn,
    signInAction
}) => {
    const handleClick = () => {
            signInAction(!siginIn.isAout)
    }
   

    return (
        <header className="Header">
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages">
                            Mssages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Register">
                            Register
                        </NavLink>
                    </li>
                    <li>
                    <button onClick={ handleClick }
                          className={ classnames("SignIn", {"signOrNot" : siginIn.isAout}) }>
                            {siginIn.isAout ? "Sign out" : "Sign In"}
                    </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = ({siginIn}) => ({siginIn});
export default connect(mapStateToProps, { signInAction })(Header);