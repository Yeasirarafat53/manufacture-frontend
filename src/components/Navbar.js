import React, { useState } from 'react';
import { SidebarData } from './SlidebarData';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header class="header-area">
        <div class="container-fluid">
          <div class="row d_flex">
            <div class=" col-md-3 col-sm-3">
              <div class="logo">
                {/* https://i.postimg.cc/fbk9kYK9/logo.png */}
                <Link to="/">
                  {/* <img src="https://i.postimg.cc/fbk9kYK9/logo.png" alt="" /> */}
                  <img
                    src="https://i.postimg.cc/mrT39NcQ/royals-1.png"
                    alt="#"
                    class="logo-img"
                  />
                </Link>
              </div>
            </div>
            <div class="col-md-7 di_none">
              <ul class="Informa_conta">
                <li>
                  <Link to="/">
                    <i class="fa fa-phone" aria-hidden="true"></i>Call Now +01
                    123467890
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>{' '}
                    Location
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    demo@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-9 col-sm-9">
              <ul class="email text_align_right">
                <li>
                  {/* <Link to="/">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </Link> */}

                  <Link to="/cart" class=" position-relative">
                    <i class="fas fa-shopping-bag"></i>
                    {cartItems.length > 0 && (
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </Link>
                  

                 
                </li>
                <li>
                  <button className="openbtn" onClick={showSidebar}>
                    <img
                      src="https://i.postimg.cc/TwVgXf07/menu-btn.png"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="/#" className="menu-bars">
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
