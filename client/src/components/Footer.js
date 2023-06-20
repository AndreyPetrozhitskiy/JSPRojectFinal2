import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from "../routes";
import {NavLink } from 'react-router-dom';
import { Context } from '../index';
import { ABOUT_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,  SHOP_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Footer = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <div className='Footer'>
                <div className='Footer__item'>
                    <div className='Footer__item-h1'>
                        <h1>Информация</h1>
                    </div>
                    <div className='Footer__item_text'>
                        <Link className='header__item' to={ABOUT_ROUTE}>О нас</Link>
                        <Link className='header__item' to={CATALOG_ROUTE}>Каталог</Link>
                    
                        <Link className='header__item' to={CONTACTS_ROUTE}>Наши контакты</Link>
                    </div>
                </div>
                <div className='Footer__item'>
                    <div className='Footer__item-h1'>
                        <h1>Соцсети</h1>
                    </div>
                    <div className='Footer__item-social'>
                            <a href='https://ya.ru/'><img className='Footer__item-social-img' src={require('../img/logo social/tg.png')}></img></a>
                            <a href='https://ya.ru/'><img className='Footer__item-social-img' src={require('../img/logo social/vk.png')}></img></a>
                            <a href='https://ya.ru/'><img className='Footer__item-social-img' src={require('../img/logo social/whatsap.png')}></img></a>
                    </div>
                </div>
                <div className='Footer__item'>
                    <div className='Footer__item-h1'>
                        <h1>Наш адрес</h1>
                        <p>г.Владивосток, ул. Гоголя, 41 </p>
                    </div>
                    <div className='Footer__item_text'>
                        <h1 >ЗВОНИТЕ ПРЯМО СЕЙЧАС:</h1>
                        <p>+7(777)-777-77-77</p>
                    </div>
            </div>
            </div>
        </div>
    );
};



export default Footer;