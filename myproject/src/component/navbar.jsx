import React from 'react'
import "./Navar.css"

      import logo from "./logo.jpeg";
// import { Newnav } from './New folder/Newnav';

// import "./App.css";
import { useContext } from 'react';
import { Authcontext } from './Authcontext';
import { Link } from 'react-router-dom';

function Navbar() {
  const {authsta}=useContext(Authcontext)
  return (
    <div>
      <div id="pricing-header-container">
        <div class="DYXrMUKmR3dwcrdVNJmP">
          <div class="giCWMuzldxbse9N1KGoT">
            <Link
              to="/"
              class="SNu6TYHdGW0qIxpAtWPI"
              aria-label="Blue Apron Home"
            >
              <div
                // style={{
                //   height: "70px",
                //   width: "56px",
                //   position: "absolute",
                //   top: "0%",
                // }}
                className="logolo"
              >
                {" "}
                <img src={logo} alt="" style={{ width: "100%" }} />
              </div>
            </Link>
            <div class="SMaFKHELS_tSmZhVi3XR">
              <div class="t4VwiUz_62mmERqTrnQ6">
                <nav class="SO5TfRgEp8_0RnFVTrMR">
                  <ul class="JTMXspkP9FmPDRIYF9gS">
                    <li class="z426_kEiG3fp3o0sMCHZ">
                      <Link to="/on-the-menu">On The Menu</Link>
                    </li>
                    <li class="z426_kEiG3fp3o0sMCHZ">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li class="z426_kEiG3fp3o0sMCHZ">
                      <Link to="/wine">Wine</Link>
                    </li>
                    <li class="z426_kEiG3fp3o0sMCHZ">
                      <Link to="/gifts">Gifts</Link>
                    </li>
                    <li class="z426_kEiG3fp3o0sMCHZ">
                      <Link to="/market">Market</Link>
                    </li>
                  </ul>
                </nav>
                <div class="nryhX3ceyrpIG8BLxGoI" role="navigation">
                  <Link to="/login">
                    {authsta.token == "QpwL5tke4Pnpja7X4" ? (
                      authsta.token
                    ) : (
                      <b>Log in</b>
                    )}
                  </Link>
                </div>
                <div class="">
                  <Link to="/sign-up">
                    <button
                      class="pom-Button pom-Button--orange pom-Button--filled pom-Button--small"
                      type="button"
                      // style={{
                      //   height: "40px",
                      //   fontSize: "8px",
                      //   fontWeight: "500",
                      // }}
                    >
                      <div class="pom-Button--mouseover"></div>
                      <span style={{ opacity: 1 }}>
                        {" "}
                        {authsta.token == "QpwL5tke4Pnpja7X4" ? (
                          <b>Log out</b>
                        ) : (
                          <b> SIGN UP</b>
                        )}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="IN5OZJUcvYrMwjdonEbW"></div>
        <div class="z88isszVULgclPALV9AW"></div>
      </div>
    </div>
  );
}

export default Navbar;

