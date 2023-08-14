import { Link } from 'gatsby';
import React from 'react';


export default function Navbar() {
  return (
    <nav>
     <div className="logo">
        <Link to="/">
        <img src='/logo.jpg'  alt="JB Coatings"  /></Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>

        {/* Add a class to the parent <ul> element */}
        <ul className="main-links">
          <li>
            <a href="#">Services</a>  {/*This causes the warning upon compilation*/}
            <ul className="dropdown"> 
        <li><a href='/offered-services/allServices/'>All services</a></li>
        <li><a href='/offered-services/mediaBlasting/'>Media Blasting</a></li>
        <li><a href='/offered-services/MountBalance/'>Mount and balancing</a></li>
        <li><a href='/offered-services/powdercoating/'>Powdercoating</a></li>
      </ul>
          </li>
        </ul>

        {/* Fix the <li> tag (change 'l' to 'li') */}
        <li><a href='/projects'>Previous projects</a></li>
      </div>
    </nav>
  );
}
