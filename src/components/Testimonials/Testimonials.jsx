import React from 'react'
import './testimonials.css'
import data from './testimonials'

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    SwiperCore.use([Autoplay]);

  return (
    <section className='testimonials' id='testimonials'>
     
        <h2>Feedback</h2>

        <Swiper className="container testimonials-container"
                
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}>
            
            {
                data.map((value, index) => {
                    return(
                        <>

                            <SwiperSlide key={index} className="testimonial">
                                <h5 className='client-name'>{value.client_name}</h5>
                                <small className='client-review'>{value.client_review}</small>
                            </SwiperSlide>
                        
                        </>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials