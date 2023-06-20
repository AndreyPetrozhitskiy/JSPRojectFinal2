import React, { useContext } from 'react';
import  { useHistory } from 'react-router-dom';
import { ABOUT_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, WEAPONPAGE_ROUTE } from "../utils/consts";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from "mobx-react-lite";
import { Context } from '../index';

const file = require('../files/Каталог.xlsx')
async function downloadFile() {
  const response = await fetch(file); 
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  window.open(url);
}
const Catalog  = observer( () => {
  const {weapons} = useContext(Context)
  const history = useHistory()
  return (
    <div >
      <h1 className="catalog-h1">Каталог</h1>
      <div className="container_catalog">
          <div className="container_catalog-filtres">
              <h1 className="container_catalog-filtres-h1">Фильтры</h1>
              <div className="container_catalog-filtres-one">
                 <div className="btn-group mw-100 filtr">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Категории
                    </button>
                    
                    <ul className="dropdown-menu">
                      {weapons.types.map(type =>
                           <li><a className="dropdown-item" href="#"
                            active={type.id === weapons.setSelectedType.id }
                            onClick={() => weapons.setSelectedType(type)}
                            key={type.id}
                           >
                            {type.name}
                            </a></li>
                        ) }

 
                    </ul>
                </div>

                <div className="btn-group mw-100 filtr">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Производитель
                    </button>
                    

                    <ul className="dropdown-menu">
                    {weapons.brands.map(brand =>
                           <li><a className="dropdown-item" href="#"
                            active={brand.id === weapons.setSelectedBrand.id }
                            onClick={() => weapons.setSelectedBrand(brand)}
                            key={brand.id}
                           >
                            {brand.name}
                            </a></li>
                        ) }
             
                    </ul>
                </div>

              </div>

              <button onClick={downloadFile} className="container_catalog-filtres_download">Скачать каталог</button>
          </div>
          <div className="container_catalog-card">
          {weapons.weapons.map(weapons =>
              <div className="card" id="card"
              key={weapons.id}
              weapons={weapons}
              onClick={() => history.push(WEAPONPAGE_ROUTE + '/' + weapons.id)}
              
              >
                <img className="card_img" src={process.env.REACT_APP_API_URL +  weapons.img}></img>

                <p className="card_price">{weapons.price} руб </p>

                <p className="card_name">{weapons.name}</p>

                <div className="card_button" id="card_button">
                <Link to={BASKET_ROUTE}><input type="button" className="buttoncrd" value={"Купить"}></input></Link>

                <input 
                type="button" 
                className="buttoncrd" 
                value={"Подробнее"}
                onClick={() => history.push(WEAPONPAGE_ROUTE + '/' + weapons.id)}
                ></input>
                
                </div>
              </div>
          )}
          </div>
      </div>
      
    </div>
  );
});

export default Catalog;