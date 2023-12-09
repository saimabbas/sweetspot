import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/relation.css";
import {
  BsArrowLeft,
  BsArrowRepeat,
  BsArrowRight,
  BsBellFill,
  BsBoxArrowLeft,
  BsChat,
  BsChatTextFill,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsChevronLeft,
  BsTrash,
  BsFileEarmark,
  BsMic,
  BsMicFill,
  BsImage,
  BsX,
  BsThreeDotsVertical,
  BsSoundwave,
  BsChatRightText,
  BsTrash2,
} from "react-icons/bs";
import Logo1 from "../assets/img/logo-1.svg";
import Logo2 from "../assets/img/emblem.png";
import PFPImg from "../assets/img/pfp.png";
import DBFilledImg1 from "../assets/img/f-img-11.svg";
import TreeYellow from "../assets/video/tree-yellow.mp4";
import DBEmptyImg from "../assets/img/db-add-relation-img.png";
import DBTextBlur from "../assets/img/db-text-blur.png";
import RelationVideoImg from "../assets/img/relation-video.png";
import QuoteImg from "../assets/img/quote-img.png";
import AddRelationImg from "../assets/img/add-relation.png";
import LinkRelationImg from "../assets/img/link-relation-img.png";
import GiftImg from "../assets/img/gift-img.png";
import MicImg from "../assets/img/mic-img.svg";
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
import $ from "jquery";

const Relation = () => {
  const [isRelationModalOpen, setisRelationModalOpen] = useState(false);
  const [isRequestSent, setisRequestSent] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [isChatLogOpen, setIsChatLogOpen] = useState(false);
  const notificationRef = useRef(null);
  gsap.registerPlugin(
    Draggable,
    SplitText,
    InertiaPlugin,
    ScrollSmoother,
    ScrollTrigger
  );

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setIsNotiOpen(false);
    }
  };

  const toggleNotificationDropdown = () => {
    setIsNotiOpen(!isNotiOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".rs-prog-1 div",
      {
        width: 0,
      },
      {
        width: "90%",
        delay: 1,
        duration: 1,
      },
      0
    );
    gsap.fromTo(
      ".rs-prog-2 div",
      {
        width: 0,
      },
      {
        delay: 1,
        width: "50%",
        duration: 1,
      },
      0
    );
    gsap.fromTo(
      ".rs-prog-3 div",
      {
        width: 0,
      },
      {
        delay: 1,
        width: "65%",
        duration: 1,
      },
      0
    );

    let landingAnim = gsap.timeline({
      delay: 1,
    });
    landingAnim
      .fromTo(
        ".rb-circle",
        {
          width: 0,
          height: 0,
        },
        {
          width: "100%",
          height: "100%",
          duration: 2,
        }
      )

      .fromTo(
        ".relation-bot h2",
        {
          y: "1.5rem",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
        },
        "<0.5"
      )
      .fromTo(
        ".relation-bot p",
        {
          y: "1.5rem",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
        },
        "<0.5"
      )
      .fromTo(
        ".relation-bot h6",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
        }
      )
      .fromTo(
        ".rb-logo-box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
        },
        "<0"
      )
      .then(() => {
        gsap.to(".rb-logo-box", {
          scale: 0.85,
          duration: 1.5,
          repeat: -1,
          delay: 1,
          yoyo: true,
          ease: Power2.easeInOut,
        });
      });

    $(".chat-intro").click(() => {
      landingAnim.reverse().then(() => {
        let chatStartAnim = gsap.timeline();
        chatStartAnim

          .to(".rv-video", {
            opacity: 1,
            duration: 1,
          })
          .to(
            ".chat-text",
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            "<0.5"
          )
          .to(
            ".chat-mic",
            {
              opacity: 1,
              scale: 1,
              duration: 1,
            },
            "<0"
          )
          .to(
            ".chat-intro",
            {
              zIndex: 0,
              duration: 1,
            },
            "<0"
          );
      });
    });
  }, []);

  return (
    <div className="sweetspot">
      <main className="relation-page">
        {isRelationModalOpen ? (
          <div className="relation-modal">
            <div className="relation-modal-content">
              {isRequestSent ? (
                <>
                  <span
                    className="rm-close"
                    onClick={() => {
                      setisRelationModalOpen(false);
                    }}
                  >
                    <BsX />
                  </span>
                  <h3>Request to connect has been sent to your partner</h3>
                  <div className="addrelation-box">
                    <div className="arb-box">
                      <img src={PFPImg} alt="" />
                      <p>
                        <span>Husband</span>
                      </p>
                    </div>
                    <div className="lr-box">
                      <img src={LinkRelationImg} alt="" />
                      <p></p>
                    </div>
                    <div
                      className="arb-box"
                      onClick={() => {
                        setisRelationModalOpen(true);
                      }}
                    >
                      <img src={PFPImg} alt="" />
                      <p>
                        <span>Wife</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3>Link your Partner</h3>
                  <div className="sp-inputbox">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Type here" />
                  </div>
                  <button
                    className="btn-yellow"
                    onClick={() => {
                      setisRequestSent(true);
                    }}
                  >
                    Continue
                  </button>
                </>
              )}
            </div>
          </div>
        ) : null}
        <header className="global-header">
          <div className="box">
            <div className="header-content">
              <img src={Logo1} alt="Logo1" />
              <div className="header-center">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/settings">Settings</Link>
              </div>
              <div className="header-right">
                <div className="noti-con" ref={notificationRef}>
                  <div
                    className="noti-box"
                    onClick={toggleNotificationDropdown}
                  >
                    <BsBellFill />
                    <span></span>
                  </div>
                  {isNotiOpen && (
                    <div className="notification-panel">
                      <h4>Notifications</h4>
                      <div className="notifications-grid">
                        <div className="notification-card">
                          <div>
                            <h3>Susan</h3>
                            <span>Nov 24, 2023</span>
                          </div>
                          <p>
                            Susan sent you a gift card for Netflix Subscription
                          </p>
                        </div>
                        <div className="notification-card">
                          <div>
                            <h3>Susan</h3>
                            <span>Nov 24, 2023</span>
                          </div>
                          <p>
                            Susan sent you a gift card for Netflix Subscription
                          </p>
                        </div>
                        <div className="notification-card">
                          <div>
                            <h3>Susan</h3>
                            <span>Nov 24, 2023</span>
                          </div>
                          <p>
                            Susan sent you a gift card for Netflix Subscription
                            and wishes you a very Happy Birthday!
                          </p>
                        </div>
                        <div className="notification-card">
                          <div>
                            <h3>Susan</h3>
                            <span>Nov 24, 2023</span>
                          </div>
                          <p>
                            Susan sent you a gift card for Netflix Subscription
                          </p>
                        </div>
                        <div className="notification-card">
                          <div>
                            <h3>Susan</h3>
                            <span>Nov 24, 2023</span>
                          </div>
                          <p>
                            Susan sent you a gift card for Netflix Subscription
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pfp-box">
                  <img src={PFPImg} alt="" />
                  <p>Hey, Saim</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="relation">
          <div className="box">
            <div className="relation-content">
              <div className="rc-head">
                <div className="rch-left">
                  <Link to="/dashboard">
                    <button className="btn-black-outlined">
                      <BsChevronLeft />
                    </button>
                  </Link>
                  <h4>
                    Lisa <span>(wife)</span>
                  </h4>
                </div>
                <div className="rch-right">
                  <Link to="/chatlog">
                    <button className="btn-black-outlined">
                      <BsChatRightText />
                    </button>
                  </Link>

                  <button className="btn-black-outlined">
                    <BsTrash />
                  </button>
                </div>
              </div>

              <div className="relation-main-grid">
                <div className="relation-box relation-bot">
                  <div className="chat-intro">
                    <div className="rb-circle"></div>
                    <div className="rb-top">
                      <h2>
                        Hey Saim! <br />
                        What's Bothering You?
                      </h2>
                      <h6>Click Here to Start a Conversation</h6>
                    </div>
                    <div className="rb-logo-box">
                      <img src={Logo2} alt="" />
                    </div>
                    <p>
                      Welcome, I'm your AI companion. Let's talk about what's on
                      your mind with Lisa and find a way forward.
                    </p>
                  </div>
                  {/* <img className="rv-video" src={RelationVideoImg} alt="" /> */}
                  <video
                    className="rv-video"
                    src={TreeYellow}
                    muted
                    autoPlay
                    loop
                  ></video>
                  <h3 className="chat-text">
                    I am glad you decided to talk about it. What is it about
                    Lisa that's bothering you, Saim?
                  </h3>
                  <div className="chat-mic">
                    {isTalking ? (
                      <BsSoundwave
                        onClick={() => {
                          setIsTalking(false);
                        }}
                      />
                    ) : (
                      <BsMic
                        onClick={() => {
                          setIsTalking(true);
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="relation-box relation-status">
                  <h4>
                    Your <span>Relation</span>, is going smoothly
                  </h4>
                  <div className="addrelation-box">
                    <div className="arb-box">
                      <img src={PFPImg} alt="" />
                      <p>Husband</p>
                    </div>
                    <div className="lr-box">
                      <img src={LinkRelationImg} alt="" />
                      <p></p>
                    </div>
                    <div
                      className="arb-box"
                      onClick={() => {
                        setisRelationModalOpen(true);
                      }}
                    >
                      <img src={AddRelationImg} alt="" />
                      <p>
                        <span>Wife</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    You can{" "}
                    <span>
                      <b>Connect</b>
                    </span>{" "}
                    with your partner
                  </p>
                </div>
                <div className="relation-box relation-stats">
                  <h4>Statistics</h4>
                  <div className="rs-con">
                    <div className="rs-box">
                      <div className="rs-box-text">
                        <p>Goals Achieved</p>
                        <p>90%</p>
                      </div>
                      <div className="rs-prog rs-prog-1">
                        <div
                          style={{
                            width: "90%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rs-box">
                      <div className="rs-box-text">
                        <p>Communication</p>
                        <p>50%</p>
                      </div>
                      <div className="rs-prog rs-prog-2">
                        <div
                          style={{
                            width: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rs-box">
                      <div className="rs-box-text">
                        <p>Overall Happiness</p>
                        <p>65%</p>
                      </div>
                      <div className="rs-prog rs-prog-3">
                        <div
                          style={{
                            width: "65%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relation-box relation-problems">
                  <h4>Problems</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce pharetra arcu ac magna bibendum interdum. Etiam enim
                    leo, sagittis sit amet ornare vitae, consectetur ac neque.
                    Quisque commodo eros, ut rhoncus lacus. Phasellus elit
                    risus, consequat ac pharetra sit amet, condimentum in velit.{" "}
                  </p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <div className="relation-box relation-advice">
                  <h4>Adviced</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce pharetra arcu ac magna bibendum interdum. Etiam enim
                    leo, sagittis sit amet ornare vitae, consectetur ac neque.
                    Quisque eu commodo eros,
                  </p>
                </div>
                <div className="relation-box relation-quote">
                  <img src={QuoteImg} alt="" />
                  <h4>Quote</h4>
                  <p>
                    "The greatest marriages are built on <br />{" "}
                    <span>teamwork.</span> A mutual <span>respect</span>, a
                    healthy dose of admiration, and a never-ending portion of{" "}
                    <span>love and grace.</span>"
                  </p>
                  <h5>~ Fawn Weaver</h5>
                </div>
                <div className="relation-box relation-gifts">
                  <div className="rg-head">
                    <h4>Recommended Gifts</h4>
                    <BsArrowRepeat />
                  </div>
                  <div className="gift-grid">
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                    <div className="gift-grid-card">
                      <img src={GiftImg} alt="" />
                      <p>Gift Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Relation;
