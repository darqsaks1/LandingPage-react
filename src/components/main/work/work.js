import React from 'react';
import './work.css'
import auto from '../../../assets/images/features/auto.svg'
import feat from '../../../assets/images/features/feat.svg'
import time from '../../../assets/images/features/tive.svg'
import Button from '../../button-form/button'
const Work = () => {
    return (
        <div class="features-block">
            <h2>Наши преимущества</h2>
            <div>
                <div className ='work-block'>
                <img src = {auto} />
                <p>Доставка в любой населенный пункт Белпочтой или курьером по Минску</p>
                </div>
                <div  className ='work-block'>
                <img src = {time} />
                <p>Оплата при получении. Никакого риска!</p>
                </div>
                <div  className ='work-block'>
                <img src = {feat} />
                <p>Более 700 довольных покупательниц</p>
                </div>
            </div>
            <Button />
        </div>

    );
}

export default Work;