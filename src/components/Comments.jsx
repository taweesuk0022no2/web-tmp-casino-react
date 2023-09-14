import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Comments.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import DataComments from '../data/DataComments.json'

function Comments() {
  return (
    <>
        <div className="Comment__main__container">
            <div className="Header__comment">
                <h1>Comments ดีๆจากทางบ้าน</h1>
                <h2>นี้คือ Comments จากบ้านที่ช่วยให้คุณตัดสินใจได้ง่ายขึ้นกับเว็บของเรา " <span>ไม่ต้องเชื่อเราให้เชื่อผู้เล่นด้วยกันเอง</span> "</h2>
            </div>

            <Swiper
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            >
                <div className='Comment__container'>
                    {DataComments.map((item, index) => (
                    <div key={item.id}>
                        <div >
                            <SwiperSlide className='Comment__card__container'>
                                <div className="Comment__card">
                                    <h2>User ID: {item.userId}</h2>
                                    <h4>วันที่ : {item.dateComment}</h4>
                                    <h1>" {item.textComment} "</h1>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                    ))}
                </div>
            </Swiper>
        </div>
    </>
  )
}

export default Comments