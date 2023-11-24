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
import DBFilledImg1 from "../assets/img/f-img-11.svg";
import DBEmptyImg from "../assets/img/db-add-relation-img.png";
import DBTextBlur from "../assets/img/db-text-blur.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
      <main className="dashboard">
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
        <div className="box">
          <div className="dashboard-content">
            <div className="db-filled-grid">
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <Link to="/relation">
                <div className="db-filled-grid-card">
                  <img src={DBFilledImg1} alt="" />
                  <p>
                    <img src={DBTextBlur} alt="" />
                    <span>Lisa</span>(Wife)
                  </p>
                </div>
              </Link>
              <div className="db-filled-grid-card db-empty-grid-card">
                <img src={DBEmptyImg} alt="" />
                <p>Name</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="db-btns">
          <button className="btn-yellow">
            <BsChatTextFill /> Chat with AI
          </button>
          <button className="btn-black-outlined">
            <BsBoxArrowLeft />
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
