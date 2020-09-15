import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import gal5 from '../../../assets/images/gal5.jpg'
import gal6 from '../../../assets/images/gal6.jpg'

import gal8 from '../../../assets/images/gal8.jpg'
import gal9 from '../../../assets/images/gal9.jpg'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider2 = () => {
    return (
        <div>
            < Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                Autoplay={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal5} />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal6} />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal8} />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slder-slide'>
                        <img src={gal9} />

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>

    );
}

export default Slider2;