import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SHOP_ROUTE } from "../utils/consts";
import  { useHistory } from 'react-router-dom';


const Basket  = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
  return (
    <div>
      <div className="container_basket">
       <h1 className="container_basket-h1">Корзина</h1>
        <h1 className="container_basket-h1">Оформление заказа</h1>

        <div class="wrapper">
    <div class="container">
        <form action="">
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Детали доставки
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">Имя</label>
                    <input placeholder="Вася" type="text" name="f-name"/>
                </div>
                <div>
                    <label for="l-name">Фамилия</label>
                    <input placeholder="Пупкин" type="text" name="l-name"/>
                </div>
            </div>
            <div class="street">
                <label for="name">Улица</label>
                <input placeholder="Ул. Ленина" type="text" name="address"/>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">Город</label>
                    <input placeholder="Москва" type="text" name="city"/>
                </div>
                <div>
                    <label for="state">Страна</label>
                    <input placeholder="Российская империя" type="text" name="state"/>
                </div>
                <div>
                    <label for="zip">Почтовый индекс</label>
                    <input placeholder="999999" type="text" name="zip"/>
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Платежная информация
            </h1>
            <div class="cc-num">
                <label for="card-num">Номер Карты</label>
                <input placeholder="хххххххххххх" type="text" name="card-num"/>
            </div>
            <div class="cc-info">
                <div>
                    <label  for="card-num">Срок действия</label>
                    <input placeholder="хх/хх" type="text" name="expire"/>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input placeholder="ххх" type="text" name="security"/>
                </div>
            </div>
            <div class="btns">
            <button type="button" onClick={handleShow}>Купить</button>
            <button type="button" onClick={() => history.push(SHOP_ROUTE)}>Вернуться на главную</button>
            </div>
        </form>
    </div>
</div>
      </div> 


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ваш заказ принят!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ваш заказ принят в обработку,мы с вами свяжемся.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => history.push(SHOP_ROUTE)}>
            Вернуться на главную страницу
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Basket ;