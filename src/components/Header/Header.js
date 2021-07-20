import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/joy-ride-5235e72a173bf.png'
import css from './Header.css'

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const name = loggedInUser.name;

    return (
        <div className="header">
            <nav className="nav">
                <ul className="ul">
                    <li><img style={{width:"100px"}} src={logo} alt="" /></li>
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