import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import WeaponStore from './store/WeaponStore';
import './css/NavBar.css'
import './css/App.css'
import './css/normalize.css'
import './css/fonts.css'
import './css/shop.css'
import './css/Slider.css'
import './css/Footer.css'
import './css/about.css'
import './css/catalog.css'
import './css/basket.css'
import './css/Contact.css'
import './css/weaponpage.css'

export const Context = createContext(null)
ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
      weapons: new WeaponStore()
  }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
)
