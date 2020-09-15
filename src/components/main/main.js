import React from 'react';
import './main.css';
import header1 from '../../assets/images/ul_header2_1.jpg'
import header2 from '../../assets/images/ul_header2_2.jpg'
import header3 from '../../assets/images/ul_header2_3.jpg'
import Button from '../button-form/button'
import Mainimage from '../../assets/images/imgMain1.png'
import iconOk from '../../assets/images/ok.svg'
import Slider from './slider/slider'
import Slider2 from './slider/slider2'
import gifImage from '../../assets/images/1.gif'
import gal1 from '../../assets/images/gallery/1.jpg'
import gal2 from '../../assets/images/gallery/2.jpg'
import gal3 from '../../assets/images/gallery/3.jpg'
import gal4 from '../../assets/images/gallery/4.jpg'
import gal5 from '../../assets/images/gallery/5.jpg'
import gal6 from '../../assets/images/gallery/6.jpg'
import Review from './adavnces/review';

const Main = () => {
    return (
        <div className="main">
            <div class="bg_white">
                <div class="ul_header1">
                    <div className="ul_header2">
                        <img src={header1} />
                        <p>Легко моется водой</p>
                    </div>
                    <div className="ul_header2">
                        <img src={header2} />
                        <p>Устойчива к горячему</p>
                    </div>
                    <div className="ul_header2">
                        <img src={header3} />
                        <p>Гипоаллергенный материал</p>
                    </div >
                </div>
                <Slider />
                <div class='advances-container'>
                    <img src={Mainimage} className='main-images' width='90%' height='90%' />
                    <h1> Плёнка состоит из крепкого материала — ПВХ</h1>
                    <div className='advancies-block-li'>
                        <div className='advancies-block-text-img'>
                            <img src={iconOk} width='20px' height='20px' />
                            <div>Пленка обеспечивает надёжную защиту плоских поверхностей
                            (массив, ламинированные, стекло, камень), пригодна для пищевого использования.
                                </div>
                        </div>
                        <div className='advancies-block-text-img'>
                            <img src={iconOk} width='20px' height='20px' />
                            <div>Защитная пленка состоит из шести ламинированных слоёв ПВХ.
                                </div>
                        </div>
                        <div className='advancies-block-text-img'>
                            <img src={iconOk} width='20px' height='20px'  />
                            <div>Накладка вырезается под абсолютно любые формы поверхностей (кухонных и письменных столов, подоконников и др.).
                                </div>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
           
            <div class='gif-block'>
                <p class="just">
                    Мягкое стекло (Soft Glass) – специальное, похожее на силикон
                    покрытие-пленка для Вашего стола.
                </p>
                <p class="just">
                    Является полимерным материалом, пришедшим из других областей
                    применения из-за особых свойств и характеристик, порой так необходимых
                    в быту.
                </p>
                <img src={gifImage}  className ='gif-image' alt='gif'/>
                
            </div>
            <Button />
            <div className='advantes'>
                <h1>Преимущества защитной пленки </h1>
                <Slider2 />
            </div>
            <div className='gallery'>
                <div className='gallery-block'>
                    <img src={gal1} width='100px' height='100px' />
                    <img src={gal2} width='100px' height='100px' />
                </div>
                <div className='gallery-block'>
                    <img src={gal3} width='100px' height='100px' />
                    <img src={gal4} width='100px' height='100px' />
                </div>
                <div className='gallery-block'>
                    <img src={gal5} width='100px' height='100px' />
                    <img src={gal6} width='100px' height='100px' />
                </div>
            </div>
            <div className='video-block'>
                <h2>Посмотрите видео обзор!</h2>
                <iframe  className ='video-frame' src="https://www.youtube.com/embed/l2bZbxSlwF8" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='reivew-block'>
                <Review />
            </div>
        </div>
    );
}

export default Main;