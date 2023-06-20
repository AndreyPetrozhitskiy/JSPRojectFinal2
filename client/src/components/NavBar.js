import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from "../routes";
import {NavLink } from 'react-router-dom';
import  { useHistory } from 'react-router-dom';
import { Context } from '../index';

import { ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,  SHOP_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from 'mobx-react-lite';


const NavBar = observer(()=> {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <div>
            <div className='header'>
            {user.isAuth ?
                    <div className="header__auth">
                        
                        <button onClick={()=> logOut()} className="header__auth-item" >ВЫЙТИ</button>
                    </div>
                    :
                    <div className="header__auth">
                    <Link className="header__auth-item" to={REGISTRATION_ROUTE}>Войти</Link>
                    
                </div>
            }
                    {user.isAuth ?
                    <div className='header__body'>
                        <Link to={SHOP_ROUTE}><img className='header__logo' src={require('../img/logo.png')} ></img></Link> 
                        <Link className='header__item' to={ABOUT_ROUTE}>О нас</Link>
                        <Link className='header__item' to={CATALOG_ROUTE}>Каталог</Link>
                        <Link className='header__item' to={CONTACTS_ROUTE}>Наши контакты</Link>
                        <div className='header__item'  onClick={()=> history.push(ADMIN_ROUTE)}>Админ панель</div>
                        <Link to={BASKET_ROUTE}><img src={require('../img/basket_logo.png')} className='header__basket' /></Link>
                    </div>
                    :
                    <div className='header__body'>
                        <Link to={SHOP_ROUTE}><img className='header__logo' src={require('../img/logo.png')} ></img></Link> 
                        <Link className='header__item' to={ABOUT_ROUTE}>О нас</Link>
                        <Link className='header__item' to={CATALOG_ROUTE}>Каталог</Link>
                        <Link className='header__item' to={CONTACTS_ROUTE}>Наши контакты</Link>
                        
                        
                    </div>
                        }
            </div>
        </div>
    );
});



export default NavBar;