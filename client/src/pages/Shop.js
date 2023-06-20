import React from "react";
import Slider from "../components/Slider";
import { CATALOG_ROUTE } from "../utils/consts";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { useEffect } from "react";
import { fetchBrands, fetchProducts, fetchTypes } from "../http/weaponsAPI";



const Shop = observer( () => {
  const {weapons} = useContext(Context)
    useEffect(()=>{
      fetchTypes().then(data => weapons.setTypes(data))
      fetchBrands().then(data => weapons.setBrands(data))
      fetchProducts().then(data => weapons.setWeapons(data.rows))
    }, [])
  
    



  useEffect(() => {
    const text = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');

    const desk = document.getElementById('img1');
    const desk2 = document.getElementById('img2');
    const desk3 = document.getElementById('img3');
    const desk4 = document.getElementById('img4');
    function navodka(addEventListener,text){
      console.log(addEventListener,text)
      if (addEventListener === "mouseover") {
          text.classList.add("shop__images--img_text2");
      } else if (addEventListener === "mouseout") {
          text.classList.remove("shop__images--img_text2");
      }
  }
  
  desk.addEventListener("mouseover", function() { navodka("mouseover",text) });
  desk.addEventListener("mouseout", function() { navodka("mouseout",text) });
  
  desk2.addEventListener("mouseover", function() { navodka("mouseover",text2) });
  desk2.addEventListener("mouseout", function() { navodka("mouseout",text2) });
  
  desk3.addEventListener("mouseover", function() { navodka("mouseover",text3) });
  desk3.addEventListener("mouseout", function() { navodka("mouseout",text3) });

  desk4.addEventListener("mouseover", function() { navodka("mouseover",text4) });
  desk4.addEventListener("mouseout", function() { navodka("mouseout",text4) });
  }, []);

  return (
    <div >
      <Slider/>

      <div className="shop__images">
          <div className="shop__images--h1">
            <h1>Наши товары</h1>
          </div>
          <Link to={CATALOG_ROUTE} className="shop__images--img" id="img1" >
              <img className="shpimg" src={require('../img/M16A2.jpg')} alt=""></img>
              <div className="shop__images--img_text" id="text1">Штурмовые винтовки</div>
            </Link>

          <Link to={CATALOG_ROUTE} className="shop__images--img" id="img2"  >
            <img className="shpimg" src={require('../img/svd.jpg')} alt=""></img>
            <div className="shop__images--img_text" id="text2">Снайперские винтовки</div>
          </Link>


          <Link to={CATALOG_ROUTE} className="shop__images--img" id="img3" >
            <img className="shpimg" src={require('../img/glock.jpg')} alt=""></img>
            <div className="shop__images--img_text" id="text3">Пистолеты</div>
          </Link>


          <Link to={CATALOG_ROUTE} className="shop__images--img" id="img4" >
            <img className="shpimg" src={require('../img/pecheneg.jpg')} alt=""></img>
            <div className="shop__images--img_text" id="text4">Ручные пулеметы</div>
          </Link>
      </div>

      
    </div>

  );
});

export default Shop;