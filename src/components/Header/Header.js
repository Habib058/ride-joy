import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import css from './Header.css'

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const name = loggedInUser.name;

    return (
        <div>
            <nav className="nav">
                <h4>RIDE-JOY</h4>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination/:id">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                   {loggedInUser.email?
                   <li style={{color:'black'}}><Link>{loggedInUser.displayName}</Link></li> : 
                   <li>
                       <Link to="/login">{<button className="btn btn-success">LogIn</button>}</Link>
                    </li>}
                </ul>
            </nav>
        </div>
    );
};

export default Header;