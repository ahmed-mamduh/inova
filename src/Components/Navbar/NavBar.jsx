import React from 'react'
import logo from "../../Assets/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
   <div className="container">
   <div className=' d-flex justify-content-end py-2 px-4'> <a>العربيه</a></div>
   </div>
   <div className='underline'></div>
   <div className="container">
    <div className='d-flex justify-content-between align-items-center p-4'> 
    
<img src={logo} className='img-logo' alt="" />  
<div className="links">
    <a href="">Sign In</a> or <a href="">Sign Up</a> 
</div>
  </div>
   </div>
    <nav id='main-nav' className="navbar navbar-expand-lg navbar-dark ">
  <div className="container">
    <Link className="navbar-brand main-color fw-bolder pe-3" href="">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item dropdown px-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All News</a></li>
            <li><a className="dropdown-item" href="#">Olympia Tournaments</a></li>
            
          </ul>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="courses">Courses</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">E-Books</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex align-items-center ">
      <i className="fa-solid fa-cart-shopping px-1"></i>
      <p className='text-white fw-bolder mb-0 px-1'>Cart</p>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
