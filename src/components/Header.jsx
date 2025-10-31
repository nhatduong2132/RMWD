import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🔥 FPT Aptech</div>
      <nav className="nav">
        <a href="#">About Us</a>
        <a href="#">Products</a>
        <a href="#">Booking</a>
        <a href="#">Locations</a>
      </nav>
      <div className="auth">
        <button className="btn sign-in">Sign In</button>
        <button className="btn sign-up">Sign Up</button>
      </div>
    </header>
  );
}
