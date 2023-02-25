import React from "react";
import "./Login.css";
import IIcon from "./IIcon";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "./Authcontext";
import { useState } from "react";

const getdata = ({ data }) => {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
const Login = () => {
   const [email, setemail] = useState("");
   const [password, setpass] = useState("");
   const { Login } = useContext(Authcontext);

   const navigate = useNavigate();
   const handdlesubmit = async (e) => {
     e.preventDefault();
     console.log(email, password);
     let data = { email: email, password: password };
     try {
       let res = await getdata({ data });
       console.log(res);
       if (res.token) {
         Login(res.token);
         navigate("/on-the-menu");
       }
     } catch (error) {
       console.log(error);
     }
   };


  return (
    <div>
      <div id="login-page">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-4 col-center">
              <div class="ba-login">
                <h1 class="ba-login-title" id="title-element">
                  Log In
                </h1>

                <form
                  onSubmit={handdlesubmit}
                  class="simple_form form-horizontal mt-15 js-login-form"
                  id="new_user"
                  novalidate="novalidate"
                  action="/users/sign_in"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <input
                    name="utf8"
                    type="hidden"
                    value="✓"
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="luocp+z9dAjr+uOlHAB3gFDJqTS1CSkIzXuSFsyWxPSFadlCgEW4JXRMdnIalCAp7KyRlCojqeiylsN2Mk4Qxg=="
                    autocomplete="off"
                  />
                  <div class="form-group control-group">
                    <label
                      class="form-label"
                      for="user-email"
                      style={{ marginRight: "280px" }}
                    >
                      Email
                    </label>
                    <input
                      class="form-input form-input--large"
                      id="user-email"
                      name="user[email]"
                      required=""
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div class="form-group control-group">
                    <label
                      class="form-label"
                      for="user-password"
                      style={{ marginRight: "240px" }}
                    >
                      Password
                    </label>
                    <input
                      class="form-input form-input--large"
                      id="user-password"
                      name="user[password]"
                      required=""
                      type="password"
                      value={password}
                      onChange={(e) => setpass(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-10">
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="ba-input-checkbox ba-input-no-border pretty-checkbox">
                          <label class="checkbox-label ba-login-remember-me ba-input-label">
                            <span class="ba-input-icon"></span>
                            <input
                              id="remember_me"
                              name="user[remember_me]"
                              type="checkbox"
                            />
                            <span class="pretty-small-text">Remember Me?</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-xs-6 txt-right">Forgot Password?</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn--full" id="login-btn" type="submit">
                      Log In
                    </button>
                  </div>
                  <div class="form-divider">
                    <div class="txt-box">
                      <span>or</span>
                    </div>
                  </div>
                </form>

                <div class="form-group">
                  <div
                    class="signin-button"
                    data-border="true"
                    data-color="black"
                    data-type="sign in"
                    id="appleid-signin"
                  >
                    <div
                      style={{
                        fontSynthesis: "none",
                        mozFontFeatureSettings: "kern",
                        webkitFontSmoothing: "antialiased",
                        mozOsxFontSmoothing: "grayscale",
                        width: "100%",
                        height: "100%",
                        minWidth: "130px",
                        maxWidth: "375px",
                        minHeight: "30px",
                        maxHeight: "64px",
                        position: "relative",
                        letterSpacing: "initial",
                      }}
                      role="button"
                      tabindex="0"
                      aria-label="Sign in with Apple"
                    >
                      <div
                        style={{
                          paddingRight: "8%",
                          paddingLeft: "8%",
                          position: "absolute",
                          boxSizing: "border-box",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <svg
                          style={{ pointerEvents: "none", overflow: "visible" }}
                          width="100%"
                          height="100%"
                        >
                          <g>
                            <svg
                              style={{ overflow: "visible" }}
                              width="100%"
                              height="50%"
                              y="25%"
                              viewBox="0 -11 111.046875 14"
                              fill="#fff"
                            >
                              <text
                                font-size="12px"
                                textLength="111.046875"
                                font-family="applied-button-font-0"
                                direction="ltr"
                              >
                                Sign in with Apple
                              </text>
                            </svg>
                          </g>
                        </svg>
                      </div>
                      <div
                        style={{
                          padding: "1px",
                          width: "100%",
                          height: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <svg
                          style={{ overflow: "visible" }}
                          width="100%"
                          height="100%"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            ry="15%"
                            fill="#000"
                            stroke="black"
                            stroke-width="1"
                            stroke-linecap="round"
                          ></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    class="sign-in-with-facebook-button"
                    id="js-FBConnect"
                    onclick="fbConnect.login(); this.blur()"
                  >
                    <span class="facebook-logo">
                      <svg version="1.1" viewBox="0 0 14222 14222">
                        <g>
                          <path
                            d="m14222 7111c0-3927-3184-7111-7111-7111s-7111 3184-7111 7111c0 3549 2600 6491 6e3 7025v-4969h-1806v-2056h1806v-1567c0-1782 1062-2767 2686-2767 778 0 1592 139 1592 139v1750h-897c-883 0-1159 548-1159 1111v1334h1972l-315 2056h-1657v4969c3400-533 6e3 -3475 6e3 -7025z"
                            fill="#FEFEFE"
                          ></path>
                          <path
                            d="m9879 9167 315-2056h-1972v-1334c0-562 275-1111 1159-1111h897v-1750s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567h-1806v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86v-4969h1657z"
                            fill="#1977F3"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <span class="sign-in-with-facebook-text">
                      Sign in with Facebook
                    </span>
                  </button>
                </div>
                <div class="ba-login-signup">
                  Don't have an account?
                  <Link class="ba-login-signup-link" to="/sign-up">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IIcon />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Login;
