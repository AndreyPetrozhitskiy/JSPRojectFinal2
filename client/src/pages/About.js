import React from "react";

const About = () => {
  return (
    <div >
      
      <div className="container_about">
        <div className="container_about--one_block">
            <h1 className="container_about--one_block-h1">О нас</h1>
            <p className="container_about--one_block-p">VVGU Weapons - один из крупнейших поставщиков оружия в мире .</p>
            <span className="container_about--one_block-span">VVGU Weapons - это:
                <ul className="container_about--one_block-ul">
                  <li>Общая площадь складов более 220 500 м2.</li>
                  <li> Более 90 000 наименований товаров.</li>
                  <li> Высокий сервис и качественное обслуживание.</li>
                  <li> Современный и инновационный подход к бизнесу.</li>
                  <li> Постоянный рост и стремление к развитию.</li>
                  <li> Индивидуальная работа с нашими покупателемя.</li>
               </ul>
            </span>
        </div>
      </div>
    </div>
  );
};

export default About ;