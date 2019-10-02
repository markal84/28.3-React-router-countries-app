import React from 'react';
import { Link } from 'react-router';
import '../bootstrap/dist/css/bootstrap.css';        //- not used in bootstrap 4
//import '../bootstrap/dist/css/bootstrap-theme.css';  //- not used in bootstrap 4

const Navigation = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                </div>
                <div className="nav navbar">
                    <ul className="nav flex-column">
                        <li><Link to="/countries">Countries</Link></li>
                        <li><Link to="/continents">Continents</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;