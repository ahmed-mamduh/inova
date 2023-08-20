import React, { useEffect, useState } from 'react'
import axios from 'axios';
import carImg from "../../Assets/Big Ramy_files/banner.5d002eef3c2ca31636eb.webp"



export default function Home() {
    const [allCourses, setAllCourses] = useState(null)

    async function getData() {
        let x = await axios.get(`http://3.65.32.166/api/v2/storefront/products?course&digital`)
        setAllCourses(x.data.data)
    }
    useEffect(() => {
        getData()

    }, [])

    return (


        <>
        <div className="container">
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
    <div className="carousel-item ">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
    <div className="carousel-item ">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
    <div className="carousel-item ">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
    <div className="carousel-item ">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
    <div className="carousel-item ">
        <div className="main-cont">
        <img src={carImg} className="d-block w-100" alt="..."/>
        <div className="layer flex-column d-flex justify-content-center align-items-center">
            <h3 className='text-aa'>training courses, books</h3>
            <h1 className=' text-center text-custom'>Make your healthy body<br/> strong is our responsibilty</h1>
            <button className='button-custom main-back mt-3'>About Us</button>
        </div>


        </div>
    </div>
  
    
  </div>
 
</div>
        
        </div>
    
    

        </>
    )
}
