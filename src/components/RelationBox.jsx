import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/dashboard.css";
import {
  BsArrowLeft,
  BsArrowRight,
  BsBellFill,
  BsBoxArrowLeft,
  BsChat,
  BsChatTextFill,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsList,
  BsX,
} from "react-icons/bs";
import Logo1 from "../assets/img/logo-1.svg";
import PFPImg from "../assets/img/pfp.png";
import DBFilledImg1 from "../assets/img/lightbox.png";
import DBEmptyImg from "../assets/img/db-add-relation-img.png";
import DBTextBlur from "../assets/img/db-text-blur.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RelationBox = () => {
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger
  );
  useEffect(() => {}, []);

  return (
    <div className="db-filled-grid-card">
      <div className="dbcard-img-box">
        <img className="dbcard-img-1" src={DBFilledImg1} alt="" />
        <img className="dbcard-img-2" src={PFPImg} alt="" />
      </div>
      <p>
        <img src={DBTextBlur} alt="" />
        <span>Lisa</span>(Wife)
      </p>
    </div>
  );
};

export default RelationBox;
