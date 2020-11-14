import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className={classes.navbar}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/counter">Counter</Link></li>
                        <li> <Link to="/calculator">Calculator</Link></li>
                        <li><Link to="/mock">Mock</Link></li>
                        <li> <Link to="/word-game">Word Game</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
