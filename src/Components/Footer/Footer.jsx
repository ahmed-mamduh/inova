import React from 'react'
import logo from "../../Assets/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"

export default function Footer() {
  return (
   <>
   
      <div className="container ">
    <div className='d-flex justify-content-between align-items-center p-4'> 
    
<img src={logo} className='img-logo' alt="" /> 
<div>
<p className=''>Join Our</p>
<p className='text-white'>Newsetter</p></div> 

<div className="d-flex justify-content-start">
    <input className='p-0 custom-inout' type="text" name="" id="" placeholder='What you are looking for'/>
    <button className='button-custom main-back'>Subscribe</button>
</div>
  </div>
   </div>
   <div className='footer'>
   <div className="container ">
   <div className='underline'></div>
   <div className="d-flex justify-content-between py-5 w-75 ">
   <div className='w-25' >
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </p>
    <p>Follow us on

</p>

<div className="icons d-flex">
    <div className="icon d-flex justify-content-center align-items-center">
    <i class="fa-brands fa-twitter"></i>
    </div>
    <div className="icon d-flex justify-content-center align-items-center">
    <i class="fa-brands fa-linkedin"></i>
        </div>
    <div className="icon  d-flex justify-content-center align-items-center">
    <i class="fa-brands fa-instagram"></i>    </div>
</div>
   </div>
   <div>
    <ul className='text-white'>
      <li>News</li>
      <li>Tournanents</li>
      <li>courses</li>
      <li>E-Books</li>
    </ul>
   </div>
   <div>
    <ul className='text-white'>
      <li>Privacy Policies</li>
      <li>Terms & Conditions</li>
      <li>Contact Us</li>
     
    </ul>
   </div>
   </div>

   </div>
   </div>
   <div className='text-center text-white '>
    <p className='mb-0'>2023 LOGO. All Rights Reserved.</p>
   </div>


   
   </>
  )
}
