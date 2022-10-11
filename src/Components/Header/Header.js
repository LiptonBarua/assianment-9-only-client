import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      
 <nav className="navbar navbar-expand-lg">
  <div className="container">
    <h1 className='navbar-brand text-white'>Exciting Project</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="manu ms-auto">

        <Link to='/'>Topies</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='blog'>Blog</Link>

      </div>
    </div>
  </div>
</nav>
 );
};

export default Header;