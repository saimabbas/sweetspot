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
} from "react-icons/bs";
import Logo1 from "../assets/img/logo-1.svg";
import PFPImg from "../assets/img/pfp.png";
import DBFilledImg1 from "../assets/img/f-img-11.svg";
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

const Relation = () => {
  const [isRelationModalOpen, setisRelationModalOpen] = useState(false);
  const [isRequestSent, setisRequestSent] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
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
      ".relation-box",
      {
        y: "1.5rem",
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 0.75,
        stagger: {
          each: 0.1,
        },
      }
    );
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
                  <p>Hey, Usman</p>
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
                  <button className="btn-black-outlined">
                    <BsChevronLeft />
                  </button>
                  <h4>
                    Lisa <span>(wife)</span>
                  </h4>
                </div>
                <div className="rch-right">
                  <button className="btn-black-outlined">
                    <BsThreeDotsVertical />
                  </button>
                  {/* <button className="btn-yellow">
                    <BsChatTextFill /> Chat with AI
                  </button> */}
                </div>
              </div>
              <div className="relation-main-grid">
                <div className="relation-box relation-video">
                  <img src={RelationVideoImg} alt="" />
                  <div className="relation-chat-box">
                    <div className="relation-msgs-box">
                      <div className="msg-person">
                        <p>She doesn't love me :(</p>
                      </div>
                      <div className="msg-ai">
                        <p>
                          Hi There how can i can you today. Tell me, What is you
                          name.
                        </p>
                      </div>
                      <div className="msg-person">
                        <p>Moiz Chaudhary</p>
                      </div>
                      <div className="msg-ai">
                        <p>
                          Tell me moiz what is the problem you are having with
                          your wife?
                        </p>
                      </div>
                      <div className="msg-person">
                        <p>She doesn't love me :(</p>
                      </div>
                      <div className="msg-ai">
                        <p>
                          Hi There how can i can you today. Tell me, What is you
                          name.
                        </p>
                      </div>
                      <div className="msg-person">
                        <p>Moiz Chaudhary</p>
                      </div>
                      <div className="msg-ai">
                        <p>
                          Tell me moiz what is the problem you are having with
                          your wife?
                        </p>
                      </div>
                      <div className="msg-person">
                        <p>She doesn't love me :(</p>
                      </div>
                      <div className="msg-ai">
                        <div className="typing-dots">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-type-box">
                      <div className="chat-input-box">
                        <input
                          type="text"
                          placeholder="What's bothering you?"
                        />
                        <span>
                          <BsImage />
                        </span>
                      </div>
                      <button>
                        <BsMicFill />
                      </button>
                    </div>
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
                      <div className="rs-prog">
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
                      <div className="rs-prog">
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
                        <p>35%</p>
                      </div>
                      <div className="rs-prog">
                        <div
                          style={{
                            width: "35%",
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
