import React from 'react';
import './button.css';

const Button = () => {
    return (
        <div>
            <div className='price-block'>
                <div className='action-price'>51% скидка!</div>
                <div className='new-old-price'>
                    <div className ='flex-col'>
                        <div>Старая цена:</div>
                        <div> 69 руб</div>
                    </div>
                    <div  className ='flex-col'>
                        <div>Новая цена:</div>
                        <div className='num'> от 29 руб</div>
                    </div>

                </div>
            </div>
            <a href='#form'>
                <div>
                    <button className="button button_size-l hero__button">Рассчитать стоимость  </button>
                </div>
            </a>
        </div>
    );
}

export default Button;