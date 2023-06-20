import React from "react";
import  { useHistory } from 'react-router-dom';

import { CCarousel,CCarouselCaption, CCarouselItem,CImage } from '@coreui/bootstrap-react'

import { ABOUT_ROUTE, CATALOG_ROUTE } from "../utils/consts";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

try {
var Slider =  function Slider() {
  const history = useHistory()
    return(
        // хуевый слайдер
        //     <MDBCarousel className="Carousel__slider" showControls fade dark >
        //             <Link to={ABOUT_ROUTE}>
        //                 <MDBCarouselItem
        //                         className='carousel__img d-block'
        //                         itemId={1}
        //                         src={require('../img/ak74m.jpg')}
        //                         alt='AK-74'
        //                 >
        //                 <h1 className="Carousel_text-h1">AK-74</h1>
        //                 <p></p>
        //                 </MDBCarouselItem>
        //             </Link>

        //             <Link to={ABOUT_ROUTE}>
        //                 <MDBCarouselItem
        //                         className='carousel__img d-block'
        //                         itemId={2}
        //                         src={require('../img/ak12.jpeg')}
        //                         alt='AK-12'
        //                         >
        //                         <h1 className="Carousel_text-h1">AK-12</h1>
        //                         <p></p>
        //                 </MDBCarouselItem>
        //             </Link>

        //             <Link to={ABOUT_ROUTE}>
        //                 <MDBCarouselItem
        //                         className='carousel__img d-block'
        //                         itemId={3}
        //                         src={require('../img/sajga-9.jpg')}
        //                         alt='Saiga-9'
        //                         >
        //                         <h1 className="Carousel_text-h1">Saiga-9</h1>
        //                         <p></p>
        //                 </MDBCarouselItem>
        //             </Link>

        //             <Link to={ABOUT_ROUTE}>
        //                 <MDBCarouselItem
        //                         className='carousel__img d-block'
        //                         itemId={4}
        //                         src={require('../img/pecheneg.jpg')}
        //                         alt='PKP Pecheneg'
        //                         >
        //                         <h1 className="Carousel_text-h1">PKP Pecheneg</h1>
        //                         <p></p>
        //                 </MDBCarouselItem>
        //             </Link>
        //     </MDBCarousel>


  <CCarousel className="Carousel__slider" controls indicators dark  transition="crossfade" >
    <CCarouselItem className='carousel__img d-block'>
      <CImage  onClick={() => history.push(CATALOG_ROUTE)} className="carousel__img d-block" src={require('../img/ak74m.jpg')} alt="slide 1" />
      <CCarouselCaption className="Carousel_text-h1">
      <h1>AK-74</h1>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem className='carousel__img d-block'>
      <CImage onClick={() => history.push(CATALOG_ROUTE)} className="carousel__img d-block" src={require('../img/ak12.jpeg')} alt="slide 2" />
      <CCarouselCaption className="Carousel_text-h1">
      <h1 >AK-12</h1>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem className='carousel__img d-block'>
      <CImage onClick={() => history.push(CATALOG_ROUTE)} className="carousel__img d-block" src={require('../img/sajga-9.jpg')} alt="slide 3" />
      <CCarouselCaption className="Carousel_text-h1">
      <h1 >Saiga-9</h1>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem className='carousel__img d-block'>
      <CImage onClick={() => history.push(CATALOG_ROUTE)} className="carousel__img d-block" src={require('../img/pecheneg.jpg')} alt="slide 4" />
      <CCarouselCaption className="Carousel_text-h1">
      <h1 >PKP Pecheneg</h1>
      </CCarouselCaption>
    </CCarouselItem>
</CCarousel>





    )
}
}  catch (error) {
        // ничего не делаем
      }
export default Slider;