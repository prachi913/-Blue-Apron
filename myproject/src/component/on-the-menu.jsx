import React, { useEffect } from 'react'
import "./Onthe.css"
// import { Icon } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import IIcon from './IIcon'
import { Footer } from './footer'
import { Link as RouterLink } from 'react-router-dom'
import {
  useState
} from 'react'

const getdata = () => {
  return fetch("https://average-red-vest.cyclic.app/onthemenue1").then((res) =>
    res.json()
  );
}

// https://average-red-vest.cyclic.app

const getdata1 = () => {
  return fetch("https://average-red-vest.cyclic.app/onthemenue2").then((res) =>
    res.json()
  );
};
const getdata2 = () => {
  return fetch("https://average-red-vest.cyclic.app/onthemenue3").then((res) =>
    res.json()
  );
};
const getdata3 = () => {
  return fetch(" https://average-red-vest.cyclic.app/onthemenue4").then((res) =>
    res.json()
  );
};
const getdata4 = () => {
  return fetch(" https://average-red-vest.cyclic.app/onthemenue5").then((res) =>
    res.json()
  );
};
const Onthemenu = () => {
  const [data, setdata] = useState([])
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  
  const fetchdata = async () => {
  try {
    let data = await getdata()
    setdata(data)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(() => {
   fetchdata() 
  }, [])
  
  const fetchdata1 = async () => {
    try {
      let data = await getdata1();
      setdata1(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata1();
  }, []);
  const fetchdata2 = async () => {
    try {
      let data = await getdata2();
      setdata2(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata2();
  }, []);
  const fetchdata3 = async () => {
    try {
      let data = await getdata3();
      setdata3(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata3();
  }, []);
  const fetchdata4 = async () => {
    try {
      let data = await getdata4();
      setdata4(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata4();
  }, []);
  return (
    <div>
      <div className="E5pomWUq2TIWAepZLpsV">
        <h1 className="fkaA_CePolPrxcyMIQkY">Explore our Menus</h1>
        <div className="wvHi_sjYe4Dhyp6NQim7">
          <div className="dTaDD97nEVPLbTPyttCv">
            <div className="f2M2G20hbw3hmsFVDBzk">
              <button
                type="button"
                className="awOzVVFPosOE7mwXL0Rt wPFz_8UBm7nveYIzwIZG"
              >
                <span className="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span className="pSF4_rFB4ihLP0_ifdXA">Signature</span>
              </button>
              <button type="button" className="awOzVVFPosOE7mwXL0Rt">
                <span className="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span className="pSF4_rFB4ihLP0_ifdXA">Vegetarian</span>
              </button>
              <button type="button" className="awOzVVFPosOE7mwXL0Rt">
                <span className="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span className="pSF4_rFB4ihLP0_ifdXA">Wellness</span>
              </button>
              <button type="button" className="awOzVVFPosOE7mwXL0Rt">
                <span className="ybUe77UacmPh2_JyV5Rl">4 Serving</span>
                <span className="pSF4_rFB4ihLP0_ifdXA">Signature for Four</span>
              </button>
              <button type="button" className="awOzVVFPosOE7mwXL0Rt">
                <span className="ybUe77UacmPh2_JyV5Rl">Weekly options</span>
                <span className="pSF4_rFB4ihLP0_ifdXA">Add-Ons</span>
              </button>
            </div>
          </div>
        </div>
        <div className="a55WhTpZ2hIp9cCyM62n">
          Choose from an ever-changing mix of meat, fish, WW Recommended and
          health-conscious offerings.
        </div>
      </div>

      <div>
        <div className="cLLjd0Y1hNVfBOVAfXKe">
          <div className="EejWNgHNdSu6FqN0lKi6">
            <div className="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                className="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span className="t9lDJhwzdcZKrDtgfUL9">Week of February 27th</span>
              </div>
              <Link
                className="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                to="/pricing"
              >
                Get cookin’
              </Link>
            </div>
          </div>
        </div>
        <div className="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div className="GTMCIHGlW0cMt8aM_8eF">
            {data.map((el) => {
              return (
                <RouterLink to={`/on-the-menu/${el.id}`}>
                  <div className="d7eXVr1T6UsgZs2xlsr_">
                    
                      <div className="pom-Product" data-testid="Product">
                        <div className="pom-Product--header">
                          <div className="pom-Clickable no-action">
                            <div className="pom-ProductCard__Icon">
                              <div
                                className=""
                                width="48"
                                height="48"
                                rotation="none"
                              >
                                <svg width="0" height="0">
                                  <path d="M0"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <img
                            className="pom-Product--image"
                            alt={el.name}
                            src={el.img}
                          />
                          <div>
                            {el.link === "" ? null : (
                              <div className="pom-Product__HeaderBadges">
                                <span
                                  className="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
                                  data-id="150"
                                  data-name="ready-to-cook"
                                  data-type="feature"
                                >
                                  {el.link}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="pom-Product--details">
                          <div className="pom-Product--details-cell">
                            <div className="pom-Product__Title">
                              <p>{el.name}</p>
                              <p>{el.title}</p>
                            </div>
                            <div className="pom-Clickable no-action">
                              <div
                                className="pom-ProductSpecifications"
                                style={{ paddingTop: "16px" }}
                              >
                                <div className="pom-ProductSpecifications--flex__center">
                                  <div className="pom-CookDuration">
                                    <span className="">
                                      <svg
                                        height="18"
                                        width="18"
                                        viewBox="0 0 18 18"
                                      >
                                        <g
                                          fill="none"
                                          fill-rule="evenodd"
                                          stroke="#00a0df"
                                        >
                                          <circle
                                            cx="9"
                                            cy="9"
                                            r="8"
                                            stroke-width="2"
                                          ></circle>
                                          <path
                                            stroke-linecap="round"
                                            stroke-width="1.5"
                                            d="M8.5 5v5l3.5 2"
                                          ></path>
                                        </g>
                                      </svg>
                                    </span>
                                    <p
                                      className="pom-CookDuration__text"
                                      style={{ color: "rgb(0, 160, 223)" }}
                                    >
                                      {el.time}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {" "}
                                  {el.wellness === "WELLNESS" ? (
                                    <div className="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                      <span>
                                        <div className="pom-CampaignBadge">
                                          {el.wellness}
                                        </div>
                                      </span>
                                      <span className="" style={{ height: "26px" }}>
                                        <svg
                                          height="26"
                                          width="26"
                                          viewBox="0 0 26 26"
                                        >
                                          <defs>
                                            <polygon
                                              id="path-1"
                                              points="0 0.414583333 24.0649479 0.414583333 24.0649479 24.4791667 0 24.4791667"
                                            ></polygon>
                                            <polygon
                                              id="path-3"
                                              points="0.02296875 0.437395833 3.23177083 0.437395833 3.23177083 3.64572917 0.02296875 3.64572917"
                                            ></polygon>
                                          </defs>
                                        </svg>
                                      </span>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pom-Product--details-cell"></div>
                        </div>
                      </div>
                    
                  </div>
                </RouterLink>
              );
            })}
          </div>
        </div>
      </div>
      <section className="TB6mcnRf5J_h4pqnfqDG" id="isolated-plan-selector">
        <div className="zcYSPVrNclt6DoCE5x2H">
          <div className="TbVQLL4FTt_qzDlB2EE2">
            <h1>Build your Plan</h1>
            <small className="_9MKN8Y4HwGCTQWAZDJar">
              <div className="oPZl22xPaOHAy_kFY2DI">
                You can update your preferences
                <br />
                and skip, pause, or cancel at any time.*
              </div>
            </small>
          </div>
          <div className="xaYxk25HAI86Ok0wu9Ov">
            <div className="x2k13aY1KbKe3kV17KOa">
              <div className="dY63RihYImcOv7qPQxRh">Number of servings</div>
              <div data-testid="plan-selector">
                <ul
                  uit="plan-card-servings-quantity-selector"
                  className="pom-QuantitySelector pom-QuantitySelector__rounded-large-text"
                  data-selected="0"
                  data-length="2"
                  data-type="rounded-large-text"
                  style={{ width: "auto" }}
                >
                  <li className="selected" data-testid="selected">
                    <button type="button">2</button>
                  </li>
                  <li className="" data-testid="">
                    <button type="button">4</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="x2k13aY1KbKe3kV17KOa">
              <div className="dY63RihYImcOv7qPQxRh">Meals per week</div>
              <div data-testid="meals-selector">
                <ul
                  uit="plan-card-meals-quantity-selector"
                  className="pom-QuantitySelector pom-QuantitySelector__rounded-large-text"
                  data-selected="0"
                  data-length="3"
                  data-type="rounded-large-text"
                  style={{ width: "auto" }}
                >
                  <li className="selected" data-testid="selected">
                    <button type="button">2</button>
                  </li>
                  <li className="" data-testid="">
                    <button type="button">3</button>
                  </li>
                  <li className="" data-testid="">
                    <button type="button">4</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aKIpx79KQczyGVo7O5JE">
          <div className="ozZpSXeEri4xpBG5Z0N1">
            <div className="UiSUkdwm0cfOwQBV1AnQ">
              <div className="njQYyX_6NpI8_rqBjBTy">
                <div className="KlJId39crii2tCuhvFu9">
                  <p
                    className="UlUrNxTrf_ZhEWTKnUSs"
                    data-testid="serving-price-value"
                  >
                    <span>
                      <span>$11.99</span>
                    </span>
                  </p>
                </div>
                <p className="YqtVJzMpZD1CZtZteWpP">per serving</p>
              </div>
              <div className="njQYyX_6NpI8_rqBjBTy">
                <div className="KlJId39crii2tCuhvFu9">
                  <p
                    className="UlUrNxTrf_ZhEWTKnUSs"
                    data-testid="shipping-price-value"
                  >
                    <span>
                      <span>$9.99</span>
                    </span>
                  </p>
                </div>
                <p className="YqtVJzMpZD1CZtZteWpP">shipping</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="rCch2rwblFoMuT5EZMDF">
            <button
              className="pom-Button pom-Button--lightBlue pom-Button--pill-filled pom-Button--card-md"
              id="continue-btn"
              type="button"
              style={{
                letterSpacing: "2px",
                padding: "13px 24px 12px",
                width: "100%",
              }}
            >
              <div className="pom-Button--mouseover"></div>
              <span style={{ opacity: "1" }}>continue</span>
            </button>
          </div>
        </div>
      </section>

      <div className="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
        <div className="GTMCIHGlW0cMt8aM_8eF">
          {data1.map((el) => {
            return (
              <div className="d7eXVr1T6UsgZs2xlsr_">
                <Link
                  to="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                  className="pom-Clickable"
                >
                  <div className="pom-Product" data-testid="Product">
                    <div className="pom-Product--header">
                      <div className="pom-Clickable no-action">
                        <div className="pom-ProductCard__Icon">
                          <div className="" width="48" height="48" rotation="none">
                            <svg width="0" height="0">
                              <path d="M0"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <img
                        className="pom-Product--image"
                        alt={el.name}
                        src={el.img}
                      />
                      <div>
                        {el.link === "" ? null : (
                          <div className="pom-Product__HeaderBadges">
                            <span
                              className="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
                              data-id="150"
                              data-name="ready-to-cook"
                              data-type="feature"
                            >
                              {el.link}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pom-Product--details">
                      <div className="pom-Product--details-cell">
                        <div className="pom-Product__Title">
                          <p>{el.name}</p>
                          <p>{el.title}</p>
                        </div>
                        <div className="pom-Clickable no-action">
                          <div
                            className="pom-ProductSpecifications"
                            style={{ paddingTop: "16px" }}
                          >
                            <div className="pom-ProductSpecifications--flex__center">
                              <div className="pom-CookDuration">
                                <span className="">
                                  <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 18 18"
                                  >
                                    <g
                                      fill="none"
                                      fill-rule="evenodd"
                                      stroke="#00a0df"
                                    >
                                      <circle
                                        cx="9"
                                        cy="9"
                                        r="8"
                                        stroke-width="2"
                                      ></circle>
                                      <path
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        d="M8.5 5v5l3.5 2"
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                                <p
                                  className="pom-CookDuration__text"
                                  style={{ color: "rgb(0, 160, 223)" }}
                                >
                                  {el.time}
                                </p>
                              </div>
                            </div>
                            <div>
                              {" "}
                              {el.wellness === "WELLNESS" ? (
                                <div className="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                  <span>
                                    <div className="pom-CampaignBadge">
                                      {el.wellness}
                                    </div>
                                  </span>
                                  <span className="" style={{ height: "26px" }}>
                                    <svg
                                      height="26"
                                      width="26"
                                      viewBox="0 0 26 26"
                                    >
                                      <defs>
                                        <polygon
                                          id="path-1"
                                          points="0 0.414583333 24.0649479 0.414583333 24.0649479 24.4791667 0 24.4791667"
                                        ></polygon>
                                        <polygon
                                          id="path-3"
                                          points="0.02296875 0.437395833 3.23177083 0.437395833 3.23177083 3.64572917 0.02296875 3.64572917"
                                        ></polygon>
                                      </defs>
                                    </svg>
                                  </span>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pom-Product--details-cell"></div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="cLLjd0Y1hNVfBOVAfXKe">
          <div className="EejWNgHNdSu6FqN0lKi6">
            <div className="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                className="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span className="t9lDJhwzdcZKrDtgfUL9">Week of February 6th</span>
              </div>
              <Link
                className="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                to="/pricing"
              >
                Get cookin’
              </Link>
            </div>
          </div>
        </div>
        <div className="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div className="GTMCIHGlW0cMt8aM_8eF">
            {data2.map((el) => {
              return (
                <div className="d7eXVr1T6UsgZs2xlsr_">
                  <Link
                    to="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    className="pom-Clickable"
                  >
                    <div className="pom-Product" data-testid="Product">
                      <div className="pom-Product--header">
                        <div className="pom-Clickable no-action">
                          <div className="pom-ProductCard__Icon">
                            <div
                              className=""
                              width="48"
                              height="48"
                              rotation="none"
                            >
                              <svg width="0" height="0">
                                <path d="M0"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <img
                          className="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div className="pom-Product__HeaderBadges">
                              <span
                                className="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
                                data-id="150"
                                data-name="ready-to-cook"
                                data-type="feature"
                              >
                                {el.link}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="pom-Product--details">
                        <div className="pom-Product--details-cell">
                          <div className="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div className="pom-Clickable no-action">
                            <div
                              className="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div className="pom-ProductSpecifications--flex__center">
                                <div className="pom-CookDuration">
                                  <span className="">
                                    <svg
                                      height="18"
                                      width="18"
                                      viewBox="0 0 18 18"
                                    >
                                      <g
                                        fill="none"
                                        fill-rule="evenodd"
                                        stroke="#00a0df"
                                      >
                                        <circle
                                          cx="9"
                                          cy="9"
                                          r="8"
                                          stroke-width="2"
                                        ></circle>
                                        <path
                                          stroke-linecap="round"
                                          stroke-width="1.5"
                                          d="M8.5 5v5l3.5 2"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <p
                                    className="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div className="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div className="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span className="" style={{ height: "26px" }}>
                                      <svg
                                        height="26"
                                        width="26"
                                        viewBox="0 0 26 26"
                                      >
                                        <defs>
                                          <polygon
                                            id="path-1"
                                            points="0 0.414583333 24.0649479 0.414583333 24.0649479 24.4791667 0 24.4791667"
                                          ></polygon>
                                          <polygon
                                            id="path-3"
                                            points="0.02296875 0.437395833 3.23177083 0.437395833 3.23177083 3.64572917 0.02296875 3.64572917"
                                          ></polygon>
                                        </defs>
                                      </svg>
                                    </span>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="cLLjd0Y1hNVfBOVAfXKe">
          <div className="EejWNgHNdSu6FqN0lKi6">
            <div className="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                className="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span className="t9lDJhwzdcZKrDtgfUL9">Week of February 13th</span>
              </div>
              <Link
                className="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                to="/pricing"
              >
                Get cookin’
              </Link>
            </div>
          </div>
        </div>
        <div className="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div className="GTMCIHGlW0cMt8aM_8eF">
            {data3.map((el) => {
              return (
                <div className="d7eXVr1T6UsgZs2xlsr_">
                  <Link
                    to="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    className="pom-Clickable"
                  >
                    <div className="pom-Product" data-testid="Product">
                      <div className="pom-Product--header">
                        <div className="pom-Clickable no-action">
                          <div className="pom-ProductCard__Icon">
                            <div
                              className=""
                              width="48"
                              height="48"
                              rotation="none"
                            >
                              <svg width="0" height="0">
                                <path d="M0"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <img
                          className="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div className="pom-Product__HeaderBadges">
                              <span
                                className="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
                                data-id="150"
                                data-name="ready-to-cook"
                                data-type="feature"
                              >
                                {el.link}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="pom-Product--details">
                        <div className="pom-Product--details-cell">
                          <div className="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div className="pom-Clickable no-action">
                            <div
                              className="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div className="pom-ProductSpecifications--flex__center">
                                <div className="pom-CookDuration">
                                  <span className="">
                                    <svg
                                      height="18"
                                      width="18"
                                      viewBox="0 0 18 18"
                                    >
                                      <g
                                        fill="none"
                                        fill-rule="evenodd"
                                        stroke="#00a0df"
                                      >
                                        <circle
                                          cx="9"
                                          cy="9"
                                          r="8"
                                          stroke-width="2"
                                        ></circle>
                                        <path
                                          stroke-linecap="round"
                                          stroke-width="1.5"
                                          d="M8.5 5v5l3.5 2"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <p
                                    className="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div className="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div className="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span className="" style={{ height: "26px" }}>
                                      <svg
                                        height="26"
                                        width="26"
                                        viewBox="0 0 26 26"
                                      >
                                        <defs>
                                          <polygon
                                            id="path-1"
                                            points="0 0.414583333 24.0649479 0.414583333 24.0649479 24.4791667 0 24.4791667"
                                          ></polygon>
                                          <polygon
                                            id="path-3"
                                            points="0.02296875 0.437395833 3.23177083 0.437395833 3.23177083 3.64572917 0.02296875 3.64572917"
                                          ></polygon>
                                        </defs>
                                      </svg>
                                    </span>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="cLLjd0Y1hNVfBOVAfXKe">
          <div className="EejWNgHNdSu6FqN0lKi6">
            <div className="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                className="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span className="t9lDJhwzdcZKrDtgfUL9">Week of February 20th</span>
              </div>
              <Link
                className="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                to="/pricing"
              >
                Get cookin’
              </Link>
            </div>
          </div>
        </div>
        <div className="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div className="GTMCIHGlW0cMt8aM_8eF">
            {data4.map((el) => {
              return (
                <div className="d7eXVr1T6UsgZs2xlsr_">
                  <Link
                    to="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    className="pom-Clickable"
                  >
                    <div className="pom-Product" data-testid="Product">
                      <div className="pom-Product--header">
                        <div className="pom-Clickable no-action">
                          <div className="pom-ProductCard__Icon">
                            <div
                              className=""
                              width="48"
                              height="48"
                              rotation="none"
                            >
                              <svg width="0" height="0">
                                <path d="M0"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <img
                          className="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div className="pom-Product__HeaderBadges">
                              <span
                                className="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
                                data-id="150"
                                data-name="ready-to-cook"
                                data-type="feature"
                              >
                                {el.link}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="pom-Product--details">
                        <div className="pom-Product--details-cell">
                          <div className="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div className="pom-Clickable no-action">
                            <div
                              className="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div className="pom-ProductSpecifications--flex__center">
                                <div className="pom-CookDuration">
                                  <span className="">
                                    <svg
                                      height="18"
                                      width="18"
                                      viewBox="0 0 18 18"
                                    >
                                      <g
                                        fill="none"
                                        fill-rule="evenodd"
                                        stroke="#00a0df"
                                      >
                                        <circle
                                          cx="9"
                                          cy="9"
                                          r="8"
                                          stroke-width="2"
                                        ></circle>
                                        <path
                                          stroke-linecap="round"
                                          stroke-width="1.5"
                                          d="M8.5 5v5l3.5 2"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <p
                                    className="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div className="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div className="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span className="" style={{ height: "26px" }}>
                                      <svg
                                        height="26"
                                        width="26"
                                        viewBox="0 0 26 26"
                                      >
                                        <defs>
                                          <polygon
                                            id="path-1"
                                            points="0 0.414583333 24.0649479 0.414583333 24.0649479 24.4791667 0 24.4791667"
                                          ></polygon>
                                          <polygon
                                            id="path-3"
                                            points="0.02296875 0.437395833 3.23177083 0.437395833 3.23177083 3.64572917 0.02296875 3.64572917"
                                          ></polygon>
                                        </defs>
                                      </svg>
                                    </span>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="QhEpJCiEG0g0QxY1T3mc">
        <Link
          className="MxFq23yTGUs3dHhvBYeJ d0h90AMcvhrPntuRmJ2p Et0v2WnMHJzA3RFmgKLG DBlWXU92zF7z_vt9ixbv HOtcKVJl_0ItLIpdBAtT"
          to="/pricing"
        >
          Get cookin’
        </Link>
        <p>Or…</p>
        <p>
          Want to see all our recipes? Check out our{" "}
          <Link to="/cookbook">Cookbook.</Link>
        </p>
      </div>
      <div>
        <IIcon />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Onthemenu