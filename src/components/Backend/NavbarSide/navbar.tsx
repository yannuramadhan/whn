import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebardata';
import './navbarstyles.css';
import { IconContext } from 'react-icons';
import { HashLink } from 'react-router-hash-link';
import { SvgIcon } from "../../../common/SvgIcon";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarActive(prevSidebarActive => !prevSidebarActive);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
        {windowWidth <= 1024 ? (
          <div className='navbartop'>
            <SvgIcon src="logo512.png" width="" height="55px" />
            <div className='nav-text'>
            <Link to="/dashboard">Home</Link>
            <Link to="/dashboard/articles">Articles</Link>
            <Link to="/dashboard/products">Products</Link>
            <Link to="#" className="nav-link" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        ) : (
          <>
          <div className='nav-menu active'>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle'>
                <SvgIcon src="logo.png" width="" height="55px" />
              </li>
              {SidebarData.map((item, index) => (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              <li className="nav-text">
                <Link to="#" className="nav-link" onClick={handleLogout}>
                  <FaIcons.FaDoorOpen />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
          </>
        )}
    </IconContext.Provider>
  );
};

export default Navbar;
