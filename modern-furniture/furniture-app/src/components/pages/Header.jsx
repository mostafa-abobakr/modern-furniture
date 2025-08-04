import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <div className="container">
              <nav>
                  <div className="logo">
                      <a href="#">
                          <span>F</span> Furniture
                      </a>
                  </div>
                  <ul>
                      <li>
                          <a href="" className="active">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="">Shop</a>
                      </li>
                      <li>
                          <a href="">About</a>
                      </li>
                      <li>
                          <a href="">Contact</a>
                      </li>
                  </ul>
                  <div className="icons">
                      <Link to="/search">
                          <SearchIcon aria-label="Search" className='icon first' />
                      </Link>
                      <Link to="/account">
                          <PersonOutlineIcon aria-label="User account" className='icon'/>
                      </Link>
                      <Link to="/cart">
                          <ShoppingCartIcon
                              aria-label="Shopping cart"
                              style={{ position: "relative" }}
                              className='icon'
                          />
                      </Link>
                  </div>
              </nav>
              <section className="categories">
                  <ul>
                      <li>
                          <a href="">Chairs</a>
                      </li>
                      <li>
                          <a href="">Storage</a>
                      </li>
                      <li>
                          <a href="">Armchairs</a>
                      </li>
                      <li>
                          <a href="">Sofas</a>
                      </li>
                      <li>
                          <a href="">Beds</a>
                      </li>
                      <li>
                          <a href="">Tables</a>
                      </li>
                      <li>
                          <a href="">Decor</a>
                      </li>
                  </ul>
              </section>
          </div>
      </header>
  );
}

export default Header