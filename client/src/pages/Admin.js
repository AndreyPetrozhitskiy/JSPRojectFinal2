import React from "react";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import { useState } from "react";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  return (
    <div className="WeaponPage_container">
        <input type="button" className="WeaponPage_container--Specifications-buton" value={"Добавить категорию"}
        onClick={()=> setTypeVisible(true)}
        ></input>
        <input type="button" className="WeaponPage_container--Specifications-buton" value={"Добавить производителя"}
        onClick={()=> setBrandVisible(true)}
        ></input>
        <input type="button" className="WeaponPage_container--Specifications-buton" value={"Добавить товар"}
        onClick={()=> setProductVisible(true)}
        ></input>
        <CreateBrand show={brandVisible} onHide={()=> setBrandVisible() }/>
        <CreateProduct show={productVisible} onHide={()=> setProductVisible() }/>
        <CreateType show={typeVisible} onHide={()=> setTypeVisible() }/>
    </div>
  );
};

export default Admin ;