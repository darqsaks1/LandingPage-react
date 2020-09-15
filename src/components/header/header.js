import React from 'react';
import headerImage from '../../assets/images/header.jpg'
import svg1 from '../../assets/svg1.svg'
import svg2 from '../../assets/svg2.svg'
import svg3 from '../../assets/svg3.svg'
import './header.css';
import Button from '../button-form/button'
const Header = () => {
    return (
        <div className="header">
            <div className='logo'> Защитная пленка на стол</div>
            <div className='advances-block-list'>
                <div className='advances-block'>
                    <img src={svg3} alt='svg'/><div className='text-header'> Индивидуальные размеры </div>

                </div>
                <div className='advances-block'>

                    <img src={svg2} alt='svg'/>  <div className='text-header'>Надежная защита </div>
                </div>
                <div className='advances-block'>

                    <img src={svg1} alt='svg' />   <div className='text-header'>Освежает внешний вид </div>
                </div>
            </div>



            <Button />

        </div>

    );
}

export default Header;