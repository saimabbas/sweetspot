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
import TreeYellow from "../assets/video/tree-yellow.mp4";
import DBFilledImg1 from "../assets/img/f-img-11.svg";
import DBEmptyImg from "../assets/img/db-add-relation-img.png";
import DBTextBlur from "../assets/img/db-text-blur.png";
import { Link } from "react-router-dom";
import RelationBox from "../components/RelationBox";

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

const Dashboard = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isMobHeaderOpen, setIsMobHeaderOpen] = useState(false);
  const [isRelationModalOpen, setisRelationModalOpen] = useState(true);
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
      ".stars path",
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 1,
        },
      }
    );
    gsap.fromTo(
      ".stars path",
      {
        rotate: 5,
        x: -5,
        y: -5,
        z: -5,
      },
      {
        x: 5,
        y: 5,
        z: 5,
        rotate: -5,
        duration: 15,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 1,
          amount: 3,
        },
      }
    );
    /*  gsap.fromTo(
      ".stars path:nth-child(odd)",
      {
        rotate: 0,
      },
      {
        rotate: -180,
        duration: 200,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 5,
        },
      }
    ); */
  }, []);

  return (
    <div className="sweetspot">
      <main className="dashboard">
        <svg
          width="1313"
          height="1178"
          viewBox="0 0 1313 1178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stars"
        >
          <path
            d="M583.486 91.1038C568.543 92.2618 567.616 93.1881 566.458 108.01C565.299 93.1881 564.344 92.2618 549.429 91.1038C564.373 89.9458 565.299 89.0194 566.458 74.1973C567.616 89.0194 568.572 89.9458 583.486 91.1038Z"
            fill="white"
          />
          <path
            d="M140.224 367.89C125.281 369.048 124.354 369.974 123.196 384.796C122.037 369.974 121.082 369.048 106.167 367.89C121.111 366.732 122.037 365.806 123.196 350.983C124.354 365.806 125.31 366.732 140.224 367.89Z"
            fill="white"
          />
          <path
            d="M825.91 8.45325C818.439 9.03224 817.975 9.49543 817.396 16.9065C816.817 9.49543 816.354 9.03224 808.882 8.45325C816.354 7.87426 816.817 7.41107 817.396 0C817.975 7.41107 818.439 7.87426 825.91 8.45325Z"
            fill="#EAA55A"
          />
          <path
            d="M268.691 849.379C261.219 849.958 260.756 850.421 260.177 857.832C259.597 850.421 259.134 849.958 251.662 849.379C259.134 848.8 259.597 848.336 260.177 840.925C260.756 848.336 261.219 848.8 268.691 849.379Z"
            fill="white"
          />
          <path
            d="M8.51424 1172.95C4.7784 1173.24 4.54672 1173.47 4.25712 1177.17C3.96752 1173.47 3.73584 1173.24 0 1172.95C3.73584 1172.66 3.96752 1172.43 4.25712 1168.72C4.54672 1172.43 4.7784 1172.66 8.51424 1172.95Z"
            fill="white"
          />
          <path
            d="M723.913 1114.82C720.177 1115.11 719.946 1115.34 719.656 1119.04C719.366 1115.34 719.135 1115.11 715.399 1114.82C719.135 1114.53 719.366 1114.3 719.656 1110.59C719.946 1114.3 720.177 1114.53 723.913 1114.82Z"
            fill="white"
          />
          <path
            d="M1286.61 510.206C1282.87 510.496 1282.64 510.727 1282.35 514.433C1282.06 510.727 1281.83 510.496 1278.09 510.206C1281.83 509.917 1282.06 509.685 1282.35 505.979C1282.64 509.685 1282.87 509.917 1286.61 510.206Z"
            fill="white"
          />
          <path
            d="M190.991 1070.35C187.255 1070.64 187.024 1070.87 186.734 1074.58C186.445 1070.87 186.213 1070.64 182.477 1070.35C186.213 1070.06 186.445 1069.83 186.734 1066.12C187.024 1069.83 187.255 1070.06 190.991 1070.35Z"
            fill="white"
          />
          <path
            d="M1005.95 66.1788C1002.22 66.4683 1001.99 66.6999 1001.7 70.4054C1001.41 66.6999 1001.18 66.4683 997.44 66.1788C1001.18 65.8893 1001.41 65.6577 1001.7 61.9521C1001.99 65.6577 1002.22 65.8893 1005.95 66.1788Z"
            fill="white"
          />
          <path
            d="M30.2342 140.984C26.4984 141.274 26.2667 141.506 25.9771 145.211C25.6875 141.506 25.4558 141.274 21.72 140.984C25.4558 140.695 25.6875 140.463 25.9771 136.758C26.2667 140.463 26.4984 140.695 30.2342 140.984Z"
            fill="white"
          />
          <path
            d="M712.387 190.082C708.651 190.372 708.419 190.603 708.13 194.309C707.84 190.603 707.608 190.372 703.873 190.082C707.608 189.793 707.84 189.561 708.13 185.855C708.419 189.561 708.651 189.793 712.387 190.082Z"
            fill="white"
          />
          <path
            d="M1210.99 193.18C1207.26 193.469 1207.02 193.701 1206.73 197.406C1206.44 193.701 1206.21 193.469 1202.48 193.18C1206.21 192.89 1206.44 192.659 1206.73 188.953C1207.02 192.659 1207.26 192.89 1210.99 193.18Z"
            fill="white"
          />
          <path
            d="M1267.43 68.4074C1259.96 68.9863 1259.5 69.4495 1258.92 76.8606C1258.34 69.4495 1257.88 68.9863 1250.41 68.4074C1257.88 67.8284 1258.34 67.3652 1258.92 59.9541C1259.5 67.3652 1259.96 67.8284 1267.43 68.4074Z"
            fill="#EAA55A"
          />
          <path
            d="M483.719 1120.4C479.983 1120.69 479.751 1120.92 479.462 1124.63C479.172 1120.92 478.94 1120.69 475.205 1120.4C478.94 1120.11 479.172 1119.88 479.462 1116.18C479.751 1119.88 479.983 1120.11 483.719 1120.4Z"
            fill="white"
          />
          <path
            d="M1274.82 1103.76C1271.08 1104.05 1270.85 1104.28 1270.56 1107.98C1270.27 1104.28 1270.04 1104.05 1266.31 1103.76C1270.04 1103.47 1270.27 1103.24 1270.56 1099.53C1270.85 1103.24 1271.08 1103.47 1274.82 1103.76Z"
            fill="white"
          />
          <path
            d="M1175.49 807.923C1160.54 809.081 1159.62 810.007 1158.46 824.829C1157.3 810.007 1156.34 809.081 1141.43 807.923C1156.37 806.765 1157.3 805.838 1158.46 791.016C1159.62 805.838 1160.57 806.765 1175.49 807.923Z"
            fill="white"
          />
          <path
            d="M42.8608 675.131C28.0912 676.26 27.1355 677.187 26.0061 691.864C24.8477 677.187 23.921 676.26 9.15137 675.131C23.921 674.002 24.8766 673.076 26.0061 658.398C27.1645 673.076 28.0912 674.002 42.8608 675.131Z"
            fill="#EAA55A"
          />
          <path
            d="M1312.67 340.33C1297.9 341.459 1296.94 342.386 1295.82 357.063C1294.66 342.386 1293.73 341.459 1278.96 340.33C1293.73 339.201 1294.69 338.275 1295.82 323.598C1296.97 338.275 1297.9 339.201 1312.67 340.33Z"
            fill="#EAA55A"
          />
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="1250"
          fill="none"
          viewBox="0 0 1313 1178"
          className="stars"
        >
          <path
            fill="#fff"
            d="M583.486 91.104c-14.943 1.158-15.87 2.084-17.028 16.906-1.159-14.822-2.114-15.748-17.029-16.906 14.944-1.158 15.87-2.085 17.029-16.907 1.158 14.822 2.114 15.749 17.028 16.907zM140.224 367.89c-14.943 1.158-15.87 2.084-17.028 16.906-1.159-14.822-2.114-15.748-17.029-16.906 14.944-1.158 15.87-2.084 17.029-16.907 1.158 14.823 2.114 15.749 17.028 16.907z"
          ></path>
          <path
            fill="#EAA55A"
            d="M825.91 8.453c-7.471.58-7.935 1.042-8.514 8.454-.579-7.412-1.042-7.875-8.514-8.454 7.472-.579 7.935-1.042 8.514-8.453.579 7.411 1.043 7.874 8.514 8.453z"
          ></path>
          <path
            fill="#fff"
            d="M268.691 849.379c-7.472.579-7.935 1.042-8.514 8.453-.58-7.411-1.043-7.874-8.515-8.453 7.472-.579 7.935-1.043 8.515-8.454.579 7.411 1.042 7.875 8.514 8.454zM8.514 1172.95c-3.736.29-3.967.52-4.257 4.22-.29-3.7-.521-3.93-4.257-4.22 3.736-.29 3.968-.52 4.257-4.23.29 3.71.521 3.94 4.257 4.23zM723.913 1114.82c-3.736.29-3.967.52-4.257 4.22-.29-3.7-.521-3.93-4.257-4.22 3.736-.29 3.967-.52 4.257-4.23.29 3.71.521 3.94 4.257 4.23zM1286.61 510.206c-3.74.29-3.97.521-4.26 4.227-.29-3.706-.52-3.937-4.26-4.227 3.74-.289 3.97-.521 4.26-4.227.29 3.706.52 3.938 4.26 4.227zM190.991 1070.35c-3.736.29-3.967.52-4.257 4.23-.289-3.71-.521-3.94-4.257-4.23 3.736-.29 3.968-.52 4.257-4.23.29 3.71.521 3.94 4.257 4.23zM1005.95 66.179c-3.73.29-3.96.52-4.25 4.226-.29-3.705-.52-3.937-4.26-4.226 3.74-.29 3.97-.521 4.26-4.227.29 3.706.52 3.937 4.25 4.227zM30.234 140.984c-3.736.29-3.967.522-4.257 4.227-.29-3.705-.521-3.937-4.257-4.227 3.736-.289 3.968-.521 4.257-4.226.29 3.705.521 3.937 4.257 4.226zM712.387 190.082c-3.736.29-3.968.521-4.257 4.227-.29-3.706-.522-3.937-4.257-4.227 3.735-.289 3.967-.521 4.257-4.227.289 3.706.521 3.938 4.257 4.227zM1210.99 193.18c-3.73.289-3.97.521-4.26 4.226-.29-3.705-.52-3.937-4.25-4.226 3.73-.29 3.96-.521 4.25-4.227.29 3.706.53 3.937 4.26 4.227z"
          ></path>
          <path
            fill="#EAA55A"
            d="M1267.43 68.407c-7.47.58-7.93 1.043-8.51 8.454-.58-7.412-1.04-7.875-8.51-8.454 7.47-.579 7.93-1.042 8.51-8.453.58 7.411 1.04 7.874 8.51 8.453z"
          ></path>
          <path
            fill="#fff"
            d="M483.719 1120.4c-3.736.29-3.968.52-4.257 4.23-.29-3.71-.522-3.94-4.257-4.23 3.735-.29 3.967-.52 4.257-4.22.289 3.7.521 3.93 4.257 4.22zM1274.82 1103.76c-3.74.29-3.97.52-4.26 4.22-.29-3.7-.52-3.93-4.25-4.22 3.73-.29 3.96-.52 4.25-4.23.29 3.71.52 3.94 4.26 4.23zM1175.49 807.923c-14.95 1.158-15.87 2.084-17.03 16.906-1.16-14.822-2.12-15.748-17.03-16.906 14.94-1.158 15.87-2.085 17.03-16.907 1.16 14.822 2.11 15.749 17.03 16.907z"
          ></path>
          <path
            fill="#EAA55A"
            d="M42.86 675.131c-14.769 1.129-15.724 2.056-16.854 16.733-1.158-14.677-2.085-15.604-16.855-16.733 14.77-1.129 15.726-2.055 16.855-16.733 1.159 14.678 2.085 15.604 16.855 16.733zM1312.67 340.33c-14.77 1.129-15.73 2.056-16.85 16.733-1.16-14.677-2.09-15.604-16.86-16.733 14.77-1.129 15.73-2.055 16.86-16.732 1.15 14.677 2.08 15.603 16.85 16.732z"
          ></path>
        </svg> */}
        <header className="global-header">
          <div className="box">
            <div className="header-content">
              <Link to="/">
                <img src={Logo1} alt="Logo1" />
              </Link>
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
                <Link to="/settings">
                  <div className="pfp-box">
                    <img src={PFPImg} alt="" />
                    <p>Hey, Saim</p>
                  </div>
                </Link>
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
        <div className="box">
          <div className="dashboard-content">
            <div className="db-filled-grid">
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <Link to="/relation">
                <RelationBox />
              </Link>
              <div className="db-filled-grid-card db-empty-grid-card">
                <div className="dbcard-img-box">
                  <img className="dbcard-img-1" src={DBEmptyImg} alt="" />
                </div>
                <p>Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="db-btns">
          <Link to="/relation">
            <button className="btn-yellow">
              <BsChatTextFill /> Chat with AI
            </button>
          </Link>
          {/* <button className="btn-black-outlined">
            <BsBoxArrowLeft />
          </button> */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
