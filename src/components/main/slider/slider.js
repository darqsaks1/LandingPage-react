import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './slider.css'
import swiperImg1 from '../../../assets/images/swiper1/swiper1.jpg'
import swiperImg2 from '../../../assets/images/swiper1/swiper2.jpg'
import swiperImg3 from '../../../assets/images/swiper1/swiper3.jpg'
import gal1 from '../../../assets/images/gal1.jpg'
import gal2 from '../../../assets/images/gal2.jpg'
import gal3 from '../../../assets/images/gal3.jpg'
import gal4 from '../../../assets/images/gal4.jpg'
const Slider = () => {
    return (
        <div className='swiper-slider-1'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                Autoplay={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={swiperImg1} />
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={swiperImg2} />
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={swiperImg3}  />
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal1}  />
                      
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal2}  />
                   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal3}  />
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal4}  />
                 
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>

    );
}

export default Slider;