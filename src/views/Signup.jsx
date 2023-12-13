import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/login.css";
import Logo1 from "../assets/img/logo-1.svg";
import {
  BsFacebook,
  BsGoogle,
  BsApple,
  BsPerson,
  BsArrowLeft,
  BsStar,
  BsCheck,
  BsDashLg,
  BsPlusLg,
  BsX,
} from "react-icons/bs";
import { MdOutlineImage } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  return (
    <main className="sweetspot">
      <div className="signup-page">
        <Link to="/">
          <img src={Logo1} alt="Logo1" />
        </Link>
        {step1 ? (
          <div className="signup-box">
            <div className="kyc-prog">
              <div className="kyc-circle-current">
                <BsStar />
              </div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
            </div>
            <h1>Setup your profile</h1>
            <div className="uploadpicture-box">
              <div className="up-box">
                <BsPerson />
                <span>Upload picture </span>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="signup-bottom">
              <div className="signup-btns-box">
                <button className="btn-gray-1">
                  <BsArrowLeft />
                </button>
                <button
                  className="btn-yellow"
                  onClick={() => {
                    setStep1(false);
                    setStep2(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {step2 ? (
          <div className="signup-box">
            <div className="kyc-prog">
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-current">
                <BsStar />
              </div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
            </div>
            <h1>Setup your password</h1>
            <div className="sp-inputbox">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder="Type here" />
            </div>
            <div className="signup-bottom">
              <div className="signup-btns-box">
                <button
                  className="btn-gray-1"
                  onClick={() => {
                    setStep1(true);
                    setStep2(false);
                  }}
                >
                  <BsArrowLeft />
                </button>
                <button
                  className="btn-yellow"
                  onClick={() => {
                    setStep2(false);
                    setStep3(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {step3 ? (
          <div className="signup-box tuay 4">
            <div className="kyc-prog">
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-current">
                <BsStar />
              </div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
            </div>

            <h1>Tell Us About Yourself</h1>
            <div className="sp-inputbox">
              <label htmlFor="">What’s your age?</label>
              <input type="number" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">
                Gender
                <span>others</span>
              </label>
              <div className="signup-btns">
                <button className="btn-black">
                  Male <span>👨🏻</span>
                </button>
                <button className="btn-black">
                  Female <span>👩🏻</span>
                </button>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Occupation</label>
              <input type="text" placeholder="Type here" />
              <div className="signup-btns occ-btns">
                <button className="btn-black">
                  Occupation
                  <span>
                    <BsX />
                  </span>
                </button>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Are you married?</label>
              <div className="signup-btns">
                <button className="btn-black">YES</button>
                <button className="btn-black">NO</button>
              </div>
            </div>
            <div className="signup-bottom">
              <div className="signup-btns-box">
                <button
                  className="btn-gray-1"
                  onClick={() => {
                    setStep2(true);
                    setStep3(false);
                  }}
                >
                  <BsArrowLeft />
                </button>
                <button
                  className="btn-yellow"
                  onClick={() => {
                    setStep3(false);
                    setStep4(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {step4 ? (
          <div className="signup-box wp 5">
            <div className="kyc-prog">
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-current">
                <BsStar />
              </div>
              <div className="kyc-line"></div>
              <div className="kyc-circle-pending"></div>
            </div>

            <h1>With who you are having problem with?</h1>

            <div className="sp-inputbox">
              <label htmlFor="">Choose Category</label>
              <div className="signup-btns">
                <button className="btn-black">Partner</button>
                <button className="btn-black">Family</button>
                <button className="btn-black">Friend</button>
                <button className="btn-black">Professional</button>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">Name of Relation</label>
              <input
                type="number"
                placeholder="E.g. Uncle, Grandson, Wife, etc."
              />
            </div>

            <div className="signup-bottom">
              <div className="signup-btns-box">
                <button
                  className="btn-gray-1"
                  onClick={() => {
                    setStep3(true);
                    setStep4(false);
                  }}
                >
                  <BsArrowLeft />
                </button>
                <button
                  className="btn-yellow"
                  onClick={() => {
                    setStep4(false);
                    setStep5(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {step5 ? (
          <div className="signup-box ar 3">
            <div className="kyc-prog">
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-done">
                <BsCheck />
              </div>
              <div className="kyc-line kyc-line-done"></div>
              <div className="kyc-circle-current">
                <BsStar />
              </div>
            </div>
            <h1>Add your First Relation</h1>
            <div className="sp-inputbox">
              <label htmlFor="">Your Partner Name</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">
                Your Partner Gender
                <span>others</span>
              </label>
              <div className="signup-btns">
                <button className="btn-black">
                  Male <span>👨🏻</span>{" "}
                </button>
                <button className="btn-black">
                  Female <span>👩🏻</span>{" "}
                </button>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">How long you have been in Relationship?</label>
              <div className="input-grp">
                <button className="btn-black">
                  <BsDashLg />
                </button>
                <input type="text" placeholder="Years" />
                <button className="btn-black">
                  <BsPlusLg />
                </button>
              </div>
            </div>
            <div className="sp-inputbox">
              <label htmlFor="">
                Add your partner image <span>(optional)</span>
              </label>
              <button className="btn-black attach-doc">
                Attach document{" "}
                <span>
                  <MdOutlineImage />
                </span>
              </button>
              <div className="doc-img-box">
                {/* <img src="" alt="" /> */}
                <span>
                  <BsX />
                </span>
              </div>
              <p>Picture name</p>
              <h6>12 KB</h6>
            </div>
            <div className="signup-bottom">
              <div className="signup-btns-box">
                <button
                  className="btn-gray-1"
                  onClick={() => {
                    setStep4(true);
                    setStep5(false);
                  }}
                >
                  <BsArrowLeft />
                </button>
                <button className="btn-yellow">Continue</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Signup;
