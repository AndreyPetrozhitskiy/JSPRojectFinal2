
import React, { useContext } from 'react';
import { ABOUT_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, WEAPONPAGE_ROUTE } from "../utils/consts";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from "mobx-react-lite";
import { Context } from '../index';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { fetchOneProducts } from '../http/weaponsAPI';


const WeaponPage = observer( () => {
  const [weapons, setWeapons] = useState( {info: []})
  const {id} = useParams()
  
    useEffect(()=>{
        fetchOneProducts(id).then(data => setWeapons(data) )
    }, [])


  


  return (
    <div>
        <div className="WeaponPage_container">
            <h1 className='WeaponPage_container--h1'>{weapons.name}</h1>
            <img className='WeaponPage_container--img' src={process.env.REACT_APP_API_URL +  weapons.img}></img>
            <div className='WeaponPage_container--Specifications'>
                {weapons.info.map((info, index ) =>
                <p className='WeaponPage_container--Specifications-p'
                key={info.id} >
                  {info.title}: {info.description} 
                </p>
                )}
            </div>
            <div className='WeaponPage_container--Specifications-btn'>
            <Link to={BASKET_ROUTE}><input type="button" className="WeaponPage_container--Specifications-buton" value={"Купить"}></input></Link>
            <h1 className='WeaponPage_container--h1-price'>{weapons.price} Руб</h1>
            </div>
        </div>




    </div>
  );
});

export default WeaponPage ;