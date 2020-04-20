import React from "react";
import "./HeaderStyles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/FirebaseUtils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <h2>SHOP</h2>
        </Link>
        <Link className="option" to="/shop">
          <h2>CONTACT</h2>
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <h2>SIGN OUT</h2>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <h2>SIGN IN</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
