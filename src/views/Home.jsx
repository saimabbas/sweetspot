import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/home.css";
import {
  BsArrowLeft,
  BsArrowRight,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsList,
  BsX,
} from "react-icons/bs";
import Logo1 from "../assets/img/logo-1.svg";
import HeroImg from "../assets/img/hero-img.svg";
import GooglePlayImg from "../assets/img/google-play.svg";
import AppStoreImg from "../assets/img/app-store.svg";
import FImg11 from "../assets/img/f-img-11.svg";
import FImg12 from "../assets/img/f-img-12.svg";
import FImg13 from "../assets/img/f-img-13.png";
import FImg21 from "../assets/img/f-img-21.png";
import FImg22 from "../assets/img/f-img-22.svg";
import FImg23 from "../assets/img/f-img-23.svg";
import FImg31 from "../assets/img/f-img-31.svg";
import FImg32 from "../assets/img/f-img-32.svg";
import FImg41 from "../assets/img/f-img-41.svg";
import FImg42 from "../assets/img/f-img-42.svg";
import SdCircleImg from "../assets/img/sd-circle.svg";
import SdArrowImg from "../assets/img/sc-arrow.svg";
import RDImg from "../assets/img/relations-dashboard-img.png";
import RDBGImg from "../assets/img/rd-bg-img.png";
import RDSwooshImg from "../assets/img/rd-swoosh-img.svg";
import TestimonialImg from "../assets/img/testimonial-img.png";
import DownloadImg1Img from "../assets/img/download-img-1.png";
import DownloadImg2Img from "../assets/img/download-img-2.png";
import CoupleImg from "../assets/img/couple-img.png";
import PurpleBlurImg from "../assets/img/purple-blur.png";
import YellowBlurImg from "../assets/img/yellow-blur.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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

const Home = () => {
  const [isMobHeaderOpen, setIsMobHeaderOpen] = useState(false);
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger
  );
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
    });

    const HomeHeroHeading = new SplitText(".hero-grid-left h1", {
      type: "words, lines, chars",
      reduceWhiteSpace: true,
    });

    let landingAnim = gsap.timeline({
      delay: 1,
    });
    landingAnim
      .fromTo(
        ".header-content",
        {
          opacity: 0,
          y: "-100%",
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.75,
        }
      )
      .fromTo(
        ".home-header-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.75,
        }
      )

      .fromTo(
        HomeHeroHeading.chars,
        {
          y: "110%",
          rotate: "15deg",
        },
        {
          rotate: 0,
          y: 0,
          stagger: {
            each: 0.02,
          },
          duration: 0.75,
        },
        0
      )
      .fromTo(
        ".hero-grid-right img",
        {
          y: "15rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 48.75,
          duration: 1.5,
        },
        0
      )
      .fromTo(
        ".hero-grid-left p",
        {
          y: "2.5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "<0.35"
      )
      .fromTo(
        ".hero-grid-left a",
        {
          y: "2.5rem",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "<0.35"
      );
    gsap.fromTo(
      ".sd-circle",
      {
        rotate: 0,
      },
      {
        rotate: "3600",
        duration: 1000,
        repeat: -1,
      }
    );
    gsap.fromTo(
      ".features-blur-1",
      {
        opacity: 0.35,
      },
      {
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: 1,
      }
    );
    document.querySelectorAll(".features-grid").forEach((card) => {
      let fgAnim = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 50%",
        },
      });
      fgAnim
        .fromTo(
          card.querySelector(".features-grid-text > h4"),
          {
            opacity: 0,
            y: "2.5rem",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          }
        )
        .fromTo(
          card.querySelector(".features-grid-text > p"),
          {
            opacity: 0,
            y: "1.5rem",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          "<0.25"
        );
    });

    let testimonialsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 75%",
      },
    });
    testimonialsAnim
      .fromTo(
        ".testimonial-card",
        {
          x: "5rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
        }
      )
      .fromTo(
        ".testimonial-left-btn",
        {
          x: "5rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
        },
        "<0.35"
      )
      .fromTo(
        ".testimonial-right-btn",
        {
          x: "5rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
        },
        "<0.35"
      );
    let journeyAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".journey-section",
        start: "top 75%",
      },
    });
    journeyAnim.fromTo(
      ".journey-grid-left > *",
      {
        x: "5rem",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.75,
        stagger: {
          each: 0.15,
        },
      }
    );
  }, []);

  return (
    <div className="sweetspot">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="home-page">
            <header className="home-header">
              <div className="box">
                <div className="header-content">
                  <div className="home-header-line"></div>
                  <Link to="/">
                    <img src={Logo1} alt="Logo1" />
                  </Link>
                  <div className="header-center">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/settings">Settings</Link>
                  </div>
                  <div className="home-header-flex">
                    <Link to="/login">
                      <button className="btn-yellow">Login</button>
                    </Link>
                    <span
                      className="header-mob-icon"
                      onClick={() => {
                        setIsMobHeaderOpen(true);
                      }}
                    >
                      <BsList />
                    </span>
                  </div>
                </div>
              </div>
            </header>
            {isMobHeaderOpen ? (
              <div className="header-mob">
                <div className="header-mob-header">
                  <Link to="/">
                    <img src={Logo1} alt="Logo1" />
                  </Link>
                  <span
                    className="header-mob-icon"
                    onClick={() => {
                      setIsMobHeaderOpen(false);
                    }}
                  >
                    <BsX />
                  </span>
                </div>
                <div className="header-mob-body">
                  <Link to="/">Home</Link>

                  <Link to="/dashboard">Dashboard</Link>

                  <Link to="/settings">Settings</Link>

                  <Link to="/login">
                    <button className="btn-yellow">LogIn</button>
                  </Link>

                  <Link to="/signup">
                    <button className="btn-black-outlined">Sign Up</button>
                  </Link>
                </div>
              </div>
            ) : null}
            <section className="hero-section">
              <div className="hero-blurbox-1"></div>
              <div className="box">
                <div className="hero-grid">
                  <div className="hero-grid-left">
                    <h6 className="satisfy">Get Started Now</h6>
                    <h1>
                      Reignite Your Love <br /> Rebuild Your Bond
                    </h1>
                    <p>
                      The Sweet Spot App is designed to be a sanctuary for
                      anyone seeking a space for open and honest communication.
                      We believe that the heart of any strong relationship lies
                      in the ability to connect
                    </p>

                    <Link to="/login">
                      <button className="btn-yellow">Get Started</button>
                    </Link>
                  </div>
                  <div className="hero-grid-right">
                    <img data-speed={1.5} src={HeroImg} alt="HeroImg" />
                  </div>
                </div>
              </div>
            </section>
            <div className="features-container">
              <div className="sd-box">
                <img className="sd-circle" src={SdCircleImg} alt="" />
                <img src={SdArrowImg} alt="" />
              </div>
              <section className="features-section">
                <img className="features-blur-1" src={YellowBlurImg} alt="" />
                <img className="features-blur-2" src={PurpleBlurImg} alt="" />
                <img className="features-blur-3" src={PurpleBlurImg} alt="" />
                <div className="box">
                  <div className="features-content">
                    <h5 className="satisfy">Our Features</h5>
                    <h2>Personalization and AI Integration</h2>
                    <div className="features-box">
                      <div className="features-grid features-grid-1">
                        <div className="features-grid-text">
                          <h4>
                            Add Any <br /> Relationship
                          </h4>
                          <p>
                            Every day is a new opportunity to <br /> strengthen
                            your connection and create <br /> lasting memories
                          </p>
                        </div>
                        <div className="features-grid-circle">
                          <span>1</span>
                        </div>
                        <div className="features-grid-img">
                          <img
                            className="f-img-1"
                            src={FImg11}
                            alt="features-grid-img"
                            data-speed={1.1}
                          />
                          <img
                            className="f-img-2"
                            src={FImg12}
                            alt="features-grid-img"
                            // data-speed={0.975}
                          />
                          <img
                            className="f-img-3"
                            src={FImg13}
                            alt="features-grid-img"
                            data-speed={0.975}
                          />
                        </div>
                      </div>
                      <div className="features-grid features-grid-2">
                        <div className="features-grid-img">
                          <img
                            className="f-img-1"
                            src={FImg21}
                            alt="features-grid-img"
                            data-speed={1.1}
                          />
                          <img
                            className="f-img-2"
                            src={FImg22}
                            alt="features-grid-img"
                          />
                          <img
                            className="f-img-3"
                            src={FImg23}
                            alt="features-grid-img"
                            data-speed={0.975}
                          />
                        </div>
                        <div className="features-grid-circle">
                          <span>2</span>
                        </div>
                        <div className="features-grid-text">
                          <h4>
                            Personalized <br /> Recommendations
                          </h4>
                          <p>
                            AI-driven suggestions based on user <br />{" "}
                            interactions and preferences.
                          </p>
                        </div>
                      </div>
                      <div className="features-grid features-grid-3">
                        <div className="features-grid-text">
                          <h4>
                            Chatbot <br /> Assistance
                          </h4>
                          <p>
                            AI-powered chatbot providing instant <br />{" "}
                            responses to common queries.
                          </p>
                        </div>
                        <div className="features-grid-circle">
                          <span>3</span>
                        </div>
                        <div className="features-grid-img">
                          <img
                            className="f-img-1"
                            src={FImg31}
                            alt="features-grid-img"
                            data-speed={1.1}
                          />
                          <img
                            className="f-img-2"
                            src={FImg32}
                            alt="features-grid-img"
                          />
                          <img
                            className="f-img-3"
                            src={FImg13}
                            alt="features-grid-img"
                            data-speed={0.975}
                          />
                        </div>
                      </div>
                      <div className="features-grid features-grid-4">
                        <div className="features-grid-img">
                          <img
                            className="f-img-1"
                            src={FImg41}
                            alt="features-grid-img"
                            data-speed={1.1}
                          />
                          <img
                            className="f-img-2"
                            src={FImg42}
                            alt="features-grid-img"
                          />
                          <img
                            className="f-img-3"
                            src={FImg23}
                            alt="features-grid-img"
                            data-speed={0.975}
                          />
                        </div>
                        <div className="features-grid-circle">
                          <span>4</span>
                        </div>
                        <div className="features-grid-text">
                          <h4>
                            Progress <br /> Tracking
                          </h4>
                          <p>
                            Tools for you to your relation <br /> progress and
                            milestones in <br /> counseling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="foundation-section">
              <img src={RDBGImg} alt="" />
              <div className="box">
                <div className="foundation-content">
                  <h2>
                    Set a Strong Foundation for <br /> Your Future Together
                  </h2>
                  {/* <div className="stores-box">
                    <img src={GooglePlayImg} alt="GooglePlayImg" />
                    <img src={AppStoreImg} alt="AppStoreImg" />
                  </div> */}
                  <div className="rd-img-box">
                    <img className="rd-swoosh-img" src={RDSwooshImg} alt="" />
                    <img
                      data-speed={0.9}
                      className="rd-img"
                      src={RDImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonials-section">
              <div className="box">
                <div className="testimonials-content">
                  <h2>Our Testimonials</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Vestibulum nec congue ante.
                  </p>
                  <Swiper
                    className="mySwiper"
                    navigation={{
                      nextEl: ".testimonial-right-btn",
                      prevEl: ".testimonial-left-btn",
                    }}
                    modules={[Navigation, EffectCreative]}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div className="testimonial-img-box">
                          <img src={TestimonialImg} alt="" />
                          <div>
                            <h6>James Milin</h6>
                            <span>Co-Founder, CEO</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum nec congue ante. Etiam sed venenatis
                          eros, fermentum sollicitudin tellus. Maecenas quis est
                          viverra, bibendum urna sit amet, tempus elit. Sed
                          porttitor lacus vel faucibus iaculis. Nam et dictum
                          elit. Proin blandit pretium nibh, vitae sagittis
                          mauris mattis in
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div className="testimonial-img-box">
                          <img src={TestimonialImg} alt="" />
                          <div>
                            <h6>James Milin</h6>
                            <span>Co-Founder, CEO</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum nec congue ante. Etiam sed venenatis
                          eros, fermentum sollicitudin tellus. Maecenas quis est
                          viverra, bibendum urna sit amet, tempus elit. Sed
                          porttitor lacus vel faucibus iaculis. Nam et dictum
                          elit. Proin blandit pretium nibh, vitae sagittis
                          mauris mattis in
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div className="testimonial-img-box">
                          <img src={TestimonialImg} alt="" />
                          <div>
                            <h6>James Milin</h6>
                            <span>Co-Founder, CEO</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum nec congue ante. Etiam sed venenatis
                          eros, fermentum sollicitudin tellus. Maecenas quis est
                          viverra, bibendum urna sit amet, tempus elit. Sed
                          porttitor lacus vel faucibus iaculis. Nam et dictum
                          elit. Proin blandit pretium nibh, vitae sagittis
                          mauris mattis in
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="testimonial-leftright-box">
                    <button className="btn-black testimonial-left-btn">
                      <BsArrowLeft />
                    </button>
                    <button className="btn-black testimonial-right-btn">
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="download-section">
              <div className="box">
                <div className="download-grid">
                  <div className="download-grid-text">
                    <h2>
                      Download our app <br /> and try our features
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris fermentum turpis vel porttitor venenatis.
                    </p>
                    <div className="stores-box">
                      <img src={GooglePlayImg} alt="GooglePlayImg" />
                      <img src={AppStoreImg} alt="AppStoreImg" />
                    </div>
                  </div>
                  <div className="download-grid-img">
                    <img src={DownloadImg1Img} alt="" />
                  </div>
                  <div className="download-grid-img">
                    <img src={DownloadImg2Img} alt="" />
                  </div>
                </div>
              </div>
            </section> */}
            <section className="journey-section">
              <div className="box">
                <div className="journey-grid">
                  <div className="journey-grid-left">
                    <h6 className="satisfy">Download Now</h6>
                    <h2>
                      Reach Out to Start <br />
                      Your Journey to a Better <br /> Relationship
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/login">
                      <button className="btn-yellow">Get Started</button>
                    </Link>
                  </div>
                  <div className="journey-grid-right">
                    <img src={CoupleImg} alt="" />
                  </div>
                </div>
              </div>
            </section>
            <footer>
              <div className="box">
                <div className="footer-content">
                  <div className="footer-top">
                    <img src={Logo1} alt="" />
                    <div>
                      <button className="btn-black-outlined">
                        <BsEnvelope />
                      </button>
                      <button className="btn-black-outlined">
                        <BsFacebook />
                      </button>
                      <button className="btn-black-outlined">
                        <BsInstagram />
                      </button>
                      <button className="btn-black-outlined">
                        <BsLinkedin />
                      </button>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <p>© 2023 Sweet Spot Social LLC. All rights reserved</p>
                    <div>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Terms of Service</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
