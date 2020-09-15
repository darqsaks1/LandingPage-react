import React, { useState, useRef } from 'react';
import './form.css'
const Form = () => {
    const [type, setType] = useState(null)
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)
    const [value, setValue] = useState('square')
    const [price, setPrice] = useState(0)
    const [radius, setRadius] = useState(null)
    console.log(width * 2)
    const handleWidth = (e) => {
        setWidth(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    const handleRadius = (e) => {
        setRadius(e.target.value);
    }
    const getPrice = () => {
        let price = 0
        if (type !== 'round') {
            if (width && height && value !== null) {
                price = Math.round(width * height * value % 100)
                console.log(price)
                return price
            }
            return '0'
        }
        else {
            if (radius && value !== null) {
                price = Math.round(radius * value % 100)
                return price
            }
            return '0'
        
    }
}

const getType = () => {
    if (type === 'round') {
        return (
            <input className='input-width' type="text" placeholder="Радиус" value={radius} onChange={(e) => handleRadius(e)} />
        )
    }

    return (
        <div>
            <input className='input-width' type="text" placeholder="Ширина" value={width} onChange={(e) => handleWidth(e)} />
            <input className='input-height' type="text" placeholder="Длина" value={height} onChange={(e) => handleHeight(e)} />
        </div>
    )

}
return (
    <div className="form" id='form'>
        <h3>Рассчитайте стоимость на нашем калькуляторе и оставьте заявку</h3>
        <div>Выберите форму:</div>
        <div className='type'>
            <button
                onClick={() => setType('round')}
                className={type === 'round' ? 'round active' : 'round notactive'}>Круглый</button>
            <button
                onClick={() => setType('square')}
                className={type === 'square' ? 'square active' : 'square notactive'} >Квадратный</button>
        </div>
        <div>Выберите толщину пленки:</div>
        <div className='size'>
            <button className={value === 0.79 ? 'plenka active' : 'plenka notactive'}
                onClick={() => setValue(0.79)}>0.7 мм.</button>
            <button className={value === 1.2 ? 'plenka active' : 'plenka notactive'}
                onClick={() => setValue(1.2)}>1.2 мм.</button>
        </div>
        <div>Укажите размеры:</div>
        <div>
            {getType()}
        </div>
        <div>Итого: {getPrice()} руб.</div>

        <div className='form_block' id='form_block'>
            <form action="" method="" class="form js-form-validate">
                <h3>
                    УСПЕЙТЕ ПРИОБРЕСТИ ВСЕГО ЗА 29 руб.
                </h3>

                <div class="some-form__line">
                    <input className='input-form' required type="text" name="name" placeholder="Ваше имя *" data-validate />

                </div>
                <div class="some-form__line">
                    <input className='input-form' required type="tel" name="phone" placeholder="Телефон: 375XXXXXXXXX" data-validate
                        pattern="375[0-9]{9}" />

                </div>

                <div class="some-form__submit">
                    <input className='input-form-submit' type="submit" value="ПРИОБРЕСТИ" />
                </div>
            </form>
        </div>
    </div>
);
}

export default Form;
