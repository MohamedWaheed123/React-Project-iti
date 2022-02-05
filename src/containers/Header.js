import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to={"/"}> <a class="navbar-brand" href="#">Navbar</a></Link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <Link to={"/"}><a class="nav-link " aria-current="page">Home</a></Link> 
       <Link to={"/about"}> <a class="nav-link">About</a></Link> 
       <Link to={"/cart"}> <a class="nav-link">MyCart</a></Link> 
       <Link to={"/register"}> <a class="nav-link">Register</a></Link> 
      </div>
    </div>
  </div>
</nav>
  );
};

export default Header;
