import React from "react";
import Group from "../assets/Group.png";
import Frame from "../assets/Frame.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="upper-footer">
        <div className="upper-footer-1">
          <h3>BE THE FIRST ONE TO KNOW</h3>
          <p>Sign Up for updates from metta muse</p>
          <form>
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="upper-footer-2">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <h5>+USD</h5>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover
          </p>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-footer-1">
          <h3>metta muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Complaince Docs</p>
        </div>
        <div className="lower-footer-2">
          <h3>Quick Links</h3>
          <p>Orders and Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment and Pricing</p>
          <p>Return and Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="lower-footer-3">
          <img src={Group} alt="group" className="image-footer-3"/>
          <div>
            <h3>metta muse ACCEPTS</h3>
            <img src={Frame} alt="frame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
