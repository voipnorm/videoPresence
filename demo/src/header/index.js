import React from 'react';
import logo from './logo.svg';
import './header.css';

const Header = (props) => (
    <header className="row">
        <div className="col-sm-auto">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="col-sm-auto subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;