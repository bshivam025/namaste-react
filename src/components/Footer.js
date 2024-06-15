import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import {HEADER_IMG_URL} from '../config/config';

const Footer = ({darkMode, setDarkMode}) => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={HEADER_IMG_URL} alt="Logo" />
      </div>
      {/* <div className="footer-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div> */}
      <div className="footer-social-icons">
        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="theme-toggle">
        <label className="theme-toggle-label" htmlFor="theme-switch">Dark Mode</label>
        <input type="checkbox" id="theme-switch" onClick={
          ()=>{
            setDarkMode(!darkMode);
          }
        } />
      </div>
    </div>
  );
};

export default Footer;
