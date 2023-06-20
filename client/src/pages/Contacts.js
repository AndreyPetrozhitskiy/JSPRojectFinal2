import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1 className="contact-h1">Наши контакты</h1>
      <div className="container_contacts">
            <div className="contacts_number">
                  <h1>НАШ АДРЕС</h1>
                  <p>г.Владивосток, ул. Гоголя, 41 </p>
                  <h1>ЗВОНИТЕ ПРЯМО СЕЙЧАС:</h1>
                  <p>+7(777)-777-77-77</p>
            </div>
            <div className="contacts_social">
            <h1>НАШИ СОЦСЕТИ</h1>
                            <a href='https://ya.ru/'><img className='contacts_social--img' src={require('../img/logo social/tg.png')}></img></a>
                            <a href='https://ya.ru/'><img className='contacts_social--img' src={require('../img/logo social/vk.png')}></img></a>
                            <a href='https://ya.ru/'><img className='contacts_social--img' src={require('../img/logo social/whatsap.png')}></img></a>
            </div>
            <div className="contacts_maps">
              <h1>Мы на карте</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.483355391601!2d131.90468995300338!3d43.124918281838696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb392110eaa9bd5%3A0x9626750fb886774!2z0YPQuy4g0JPQvtCz0L7Qu9GPLCA0MSwg0J7QpNCY0KEgMTIzNCwg0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0LksIDY5MDAxNA!5e0!3m2!1sru!2sru!4v1686154699006!5m2!1sru!2sru" width="600" height="450" className="map"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </div>
    </div>
  );
};

export default Contacts ;