import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/settings.css";
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
  BsCamera,
  BsList,
  BsX,
} from "react-icons/bs";
import Logo1 from "../assets/img/logo-1.svg";
import BigPFPImg from "../assets/img/pfp-large.png";
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
import SettingsBg from "../assets/img/rd-bg-img.png";
import { Link } from "react-router-dom";

const Relation = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isMobHeaderOpen, setIsMobHeaderOpen] = useState(false);
  const [isRelationModalOpen, setisRelationModalOpen] = useState(true);
  const notificationRef = useRef(null);

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
  return (
    <div className="sweetspot">
      <main className="settings-page">
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
                <span
                  className="header-mob-icon"
                  onClick={() => {
                    setIsMobHeaderOpen(true);
                  }}
                >
                  <BsList />
                </span>{" "}
                <div className="pfp-box">
                  <img src={PFPImg} alt="" />
                  <p>Hey, Usman</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {isMobHeaderOpen ? (
          <div className="header-mob">
            <div className="header-mob-header">
              <img src={Logo1} alt="Logo1" />
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
            </div>
          </div>
        ) : null}
        <div className="settings-content">
          <div className="box">
            <div className="settings-grid">
              <div className="settings-grid-card">
                <h3>Profile Settings</h3>
                <div className="sgc-grid">
                  <div className="sp-inputbox">
                    <label htmlFor="">First Name</label>
                    <input
                      defaultValue={"Saim"}
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="sp-inputbox">
                    <label htmlFor="">Last Name</label>
                    <input
                      defaultValue={"Abbas"}
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="sp-inputbox">
                    <label htmlFor="">Age</label>
                    <input
                      defaultValue={"25"}
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="sp-inputbox">
                    <label htmlFor="">Gender</label>
                    <input
                      defaultValue={"Male"}
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Account Settings</h3>
                <div className="sgc-grid">
                  <div className="sp-inputbox">
                    <label htmlFor="">Email</label>
                    <input
                      defaultValue={"webexhaust@gmail.com"}
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="sp-inputbox">
                    <label htmlFor="">Password</label>
                    <input
                      defaultValue={"webexhaust123"}
                      type="password"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <button className="btn-yellow">Save Changes</button>
              </div>
              <div className="settings-pfp-box-con">
                <div className="settings-pfp-box">
                  <img src={BigPFPImg} alt="" />
                  <div className="settings-pfp-camera">
                    <BsCamera />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Relation;
