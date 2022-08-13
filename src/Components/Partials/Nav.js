import React from 'react';


export default function Navigation() {
    return (
      <nav>
        <a href="#about">Home</a>
        <a href="#contact-me">Contact</a>
        <div id="dropdown">
          <div id="dropdownBtn">Projects</div>
          <div id="dropdownLinks">
            <a href="#What'cha Makin'?">What'cha Makin?</a>
            <a href="#Hnefetafl">Hnefetafl</a>
            <a href="#Spotif-why?">Spotif-why?</a>
            <a href="#Exercise Volume Tracker">Volume Tracker</a>
            <a href="#TRKR">TRKR</a>
          </div>
        </div>
      </nav>
    )
};