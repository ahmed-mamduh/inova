import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function Courses() {
    const [allCourses, setAllCourses] = useState(null)

    async function getData() {
        let x = await axios.get(`http://3.65.32.166/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital`)
        setAllCourses(x.data.data)
        console.log(x.data.data);
    }
    useEffect(() => {
        getData()

    }, [])
    return (
        <>
            <div className="container">
                <h2>Courses</h2>

                <button className=' px-5 py-2 button-custom main-back'>All</button>
                

            </div>
            {allCourses && <>
                <div className="container py-2">
                {allCourses?<>
                {allCourses.map((el)=> <>
                    <div class="card w-25" >
  <img src={el.attributes.course.image_url} class="w-100 card-img-top" alt="..."/>
  <div class="card-body custom">
    <h5 class="card-title">{el.attributes.name}</h5>
    <div className='d-flex mb-2'>
    <i class="fa-regular fa-star .main-back main-color"></i>
    <i class="fa-regular fa-star .main-back main-color"></i>
    <i class="fa-regular fa-star .main-back main-color"></i>
    <i class="fa-regular fa-star .main-back main-color"></i>
    <i class="fa-regular fa-star .main-back main-color"></i>
    </div>
    <p>{el.attributes.currency} {el.attributes.price}</p>
    <div className='d-flex '>
        <button className='button-custom main-back w-100'>Pay</button>
        <div className='main-color custom-icon ms-2'>
        <i className="fa-solid fa-cart-shopping px-1"></i>
        </div>

    </div>
  </div>
</div>
                </>)}
                </>: ""}
            </div>
            </>}
         


        </>
    )
}
