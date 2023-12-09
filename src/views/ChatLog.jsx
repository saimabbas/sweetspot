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

const ChatLog = () => {
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
                  <Link to="/relation">
                    <button className="btn-black-outlined">
                      <BsChevronLeft />
                    </button>
                  </Link>

                  <h4>Chat Log</h4>
                </div>
              </div>
              <div className="chatlog-box">
                <p>
                  This is the chat log of your relationshiup with Lisa (wife)
                </p>
                <div className="relation-box">
                  <div className="relation-msgs-box">
                    <div className="msg-person">
                      <p>
                        Hi, I've been feeling a bit down lately because my wife
                        doesn't seem to have much time for me.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        I'm sorry to hear that you're feeling this way. It's
                        important to feel valued in a relationship. Have you had
                        a chance to talk to her about how this is affecting you?
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>
                        Not really, I don't know how to bring it up without
                        sounding needy.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        It's completely valid to express your feelings in a
                        relationship. Maybe you could find a quiet time to talk
                        and express that you miss spending quality time with
                        her. It's not about being needy; it's about
                        communicating your needs in a healthy way.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>
                        That makes sense. But what if she thinks I'm
                        overreacting?
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        It's important to communicate your feelings honestly and
                        calmly. Let her know that it's about your feelings and
                        your need for connection. It’s not about blaming but
                        rather sharing how the current situation makes you feel.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>I guess I'm also scared of what she might say.</p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        That's understandable. Remember, it’s about opening a
                        dialogue. It's as much about understanding her
                        perspective as it is about sharing yours. Maybe she's
                        unaware of how you feel or she's been caught up with
                        other responsibilities.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>True, she has been really busy with work lately.</p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        It's possible that she's also feeling the strain but
                        doesn't know how to balance things. You could suggest
                        planning specific times for just the two of you, like
                        date nights or a weekend activity.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>
                        That's a good idea. It could give us something to look
                        forward to.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        Exactly. It's about finding mutual time where you both
                        can reconnect and enjoy each other's company.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-person">
                      <p>
                        {" "}
                        I'll try talking to her tonight and suggest this. Thanks
                        for the advice.
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
                    </div>
                    <div className="msg-ai">
                      <p>
                        You're welcome. Remember, communication is key in any
                        relationship. Feel free to reach out if you need more
                        help. Good luck!
                      </p>
                      <h6>Nov 24 - 03:45 PM</h6>
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

export default ChatLog;
