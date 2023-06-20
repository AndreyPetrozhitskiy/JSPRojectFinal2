
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {Context} from "./index";
import {check} from "./http/userAPI";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './frontendJS/front';
import { gsap } from "gsap";

const App = observer(() => {
 



 useEffect(() => {
  var tl = gsap.timeline();
  tl.from(".header", { opacity: 0, y: 200, duration: 0.7 });
  tl.from(".Carousel__slider", { opacity: 0, y: 200, duration: 0.7 });
  tl.from(".shop__images", { opacity: 0, y: 200, duration: 0.7 });
  tl.from(".Footer", { opacity: 0, y: 200, duration: 0.7 });
}, []);






  return (
    <div className="body">
        <BrowserRouter>
          <NavBar/>
          <AppRouter />
          <Footer/>
      </BrowserRouter>
    </div>
  );
});

export default App;