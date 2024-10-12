import React from "react";
import Logo from "../assets/Logo.png";
import search from "../assets/search-normal.png";
import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
import bag from "../assets/shopping-bag.png";
import element from "../assets/element-4.png";

const Header = () => {
  return (
    <div className="main-header">
      <div className="top-header">
<div className="lorem-ipsum">
  <img src={element} alt="element" />
  <p>lorem ipsum dolor</p>
</div>
<div className="lorem-ipsum">
  <img src={element} alt="element" />
  <p>lorem ipsum dolor</p>
</div>
<div className="lorem-ipsum">
  <img src={element} alt="element" />
  <p>lorem ipsum dolor</p>
</div>
      </div>
      <div className="mid-header">
<img src={Logo} alt="logo"/>
<h1>LOGO</h1>
<div className="logos">
<img src={search} alt="search"/>
<img src={heart} alt="heart"/>
<img src={bag} alt="bag"/>
<img src={profile} alt="profile"/>

</div>
      </div>
      <div className="lower-header">
<h3>Shop</h3>
<h3>Skills</h3>
<h3>Stories</h3>
<h3>About</h3>
<h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default Header;
