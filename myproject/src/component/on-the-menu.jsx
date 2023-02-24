import React, { useEffect } from 'react'
import "./Onthe.css"
// import { Icon } from '@chakra-ui/react'
import IIcon from './IIcon'
import { Footer } from './footer'
import { Link as RouterLink } from 'react-router-dom'
import {
  useState
} from 'react'

const getdata = () => {
  return fetch(" http://localhost:3000/onthemenue1").then((res) => res.json());
}

const getdata1 = () => {
  return fetch(" http://localhost:3000/onthemenue2").then((res) => res.json());
};
const getdata2 = () => {
  return fetch(" http://localhost:3000/onthemenue3").then((res) => res.json());
};
const getdata3 = () => {
  return fetch(" http://localhost:3000/onthemenue4").then((res) => res.json());
};
const getdata4 = () => {
  return fetch(" http://localhost:3000/onthemenue5").then((res) => res.json());
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
      <div class="E5pomWUq2TIWAepZLpsV">
        <h1 class="fkaA_CePolPrxcyMIQkY">Explore our Menus</h1>
        <div class="wvHi_sjYe4Dhyp6NQim7">
          <div class="dTaDD97nEVPLbTPyttCv">
            <div class="f2M2G20hbw3hmsFVDBzk">
              <button
                type="button"
                class="awOzVVFPosOE7mwXL0Rt wPFz_8UBm7nveYIzwIZG"
              >
                <span class="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span class="pSF4_rFB4ihLP0_ifdXA">Signature</span>
              </button>
              <button type="button" class="awOzVVFPosOE7mwXL0Rt">
                <span class="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span class="pSF4_rFB4ihLP0_ifdXA">Vegetarian</span>
              </button>
              <button type="button" class="awOzVVFPosOE7mwXL0Rt">
                <span class="ybUe77UacmPh2_JyV5Rl">2 Serving</span>
                <span class="pSF4_rFB4ihLP0_ifdXA">Wellness</span>
              </button>
              <button type="button" class="awOzVVFPosOE7mwXL0Rt">
                <span class="ybUe77UacmPh2_JyV5Rl">4 Serving</span>
                <span class="pSF4_rFB4ihLP0_ifdXA">Signature for Four</span>
              </button>
              <button type="button" class="awOzVVFPosOE7mwXL0Rt">
                <span class="ybUe77UacmPh2_JyV5Rl">Weekly options</span>
                <span class="pSF4_rFB4ihLP0_ifdXA">Add-Ons</span>
              </button>
            </div>
          </div>
        </div>
        <div class="a55WhTpZ2hIp9cCyM62n">
          Choose from an ever-changing mix of meat, fish, WW Recommended and
          health-conscious offerings.
        </div>
      </div>

      <div>
        <div class="cLLjd0Y1hNVfBOVAfXKe">
          <div class="EejWNgHNdSu6FqN0lKi6">
            <div class="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                class="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span class="t9lDJhwzdcZKrDtgfUL9">Week of February 27th</span>
              </div>
              <a
                class="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                href="/pricing"
              >
                Get cookin’
              </a>
            </div>
          </div>
        </div>
        <div class="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div class="GTMCIHGlW0cMt8aM_8eF">
            {data.map((el) => {
              return (
                <RouterLink to={`/on-the-menu/${el.id}`}>
                  <div class="d7eXVr1T6UsgZs2xlsr_">
                    
                      <div class="pom-Product" data-testid="Product">
                        <div class="pom-Product--header">
                          <div class="pom-Clickable no-action">
                            <div class="pom-ProductCard__Icon">
                              <div
                                class=""
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
                            class="pom-Product--image"
                            alt={el.name}
                            src={el.img}
                          />
                          <div>
                            {el.link === "" ? null : (
                              <div class="pom-Product__HeaderBadges">
                                <span
                                  class="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
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
                        <div class="pom-Product--details">
                          <div class="pom-Product--details-cell">
                            <div class="pom-Product__Title">
                              <p>{el.name}</p>
                              <p>{el.title}</p>
                            </div>
                            <div class="pom-Clickable no-action">
                              <div
                                class="pom-ProductSpecifications"
                                style={{ paddingTop: "16px" }}
                              >
                                <div class="pom-ProductSpecifications--flex__center">
                                  <div class="pom-CookDuration">
                                    <span class="">
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
                                      class="pom-CookDuration__text"
                                      style={{ color: "rgb(0, 160, 223)" }}
                                    >
                                      {el.time}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {" "}
                                  {el.wellness === "WELLNESS" ? (
                                    <div class="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                      <span>
                                        <div class="pom-CampaignBadge">
                                          {el.wellness}
                                        </div>
                                      </span>
                                      <span class="" style={{ height: "26px" }}>
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
                          <div class="pom-Product--details-cell"></div>
                        </div>
                      </div>
                    
                  </div>
                </RouterLink>
              );
            })}
          </div>
        </div>
      </div>
      <section class="TB6mcnRf5J_h4pqnfqDG" id="isolated-plan-selector">
        <div class="zcYSPVrNclt6DoCE5x2H">
          <div class="TbVQLL4FTt_qzDlB2EE2">
            <h1>Build your Plan</h1>
            <small class="_9MKN8Y4HwGCTQWAZDJar">
              <div class="oPZl22xPaOHAy_kFY2DI">
                You can update your preferences
                <br />
                and skip, pause, or cancel at any time.*
              </div>
            </small>
          </div>
          <div class="xaYxk25HAI86Ok0wu9Ov">
            <div class="x2k13aY1KbKe3kV17KOa">
              <div class="dY63RihYImcOv7qPQxRh">Number of servings</div>
              <div data-testid="plan-selector">
                <ul
                  uit="plan-card-servings-quantity-selector"
                  class="pom-QuantitySelector pom-QuantitySelector__rounded-large-text"
                  data-selected="0"
                  data-length="2"
                  data-type="rounded-large-text"
                  style={{ width: "auto" }}
                >
                  <li class="selected" data-testid="selected">
                    <button type="button">2</button>
                  </li>
                  <li class="" data-testid="">
                    <button type="button">4</button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="x2k13aY1KbKe3kV17KOa">
              <div class="dY63RihYImcOv7qPQxRh">Meals per week</div>
              <div data-testid="meals-selector">
                <ul
                  uit="plan-card-meals-quantity-selector"
                  class="pom-QuantitySelector pom-QuantitySelector__rounded-large-text"
                  data-selected="0"
                  data-length="3"
                  data-type="rounded-large-text"
                  style={{ width: "auto" }}
                >
                  <li class="selected" data-testid="selected">
                    <button type="button">2</button>
                  </li>
                  <li class="" data-testid="">
                    <button type="button">3</button>
                  </li>
                  <li class="" data-testid="">
                    <button type="button">4</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="aKIpx79KQczyGVo7O5JE">
          <div class="ozZpSXeEri4xpBG5Z0N1">
            <div class="UiSUkdwm0cfOwQBV1AnQ">
              <div class="njQYyX_6NpI8_rqBjBTy">
                <div class="KlJId39crii2tCuhvFu9">
                  <p
                    class="UlUrNxTrf_ZhEWTKnUSs"
                    data-testid="serving-price-value"
                  >
                    <span>
                      <span>$11.99</span>
                    </span>
                  </p>
                </div>
                <p class="YqtVJzMpZD1CZtZteWpP">per serving</p>
              </div>
              <div class="njQYyX_6NpI8_rqBjBTy">
                <div class="KlJId39crii2tCuhvFu9">
                  <p
                    class="UlUrNxTrf_ZhEWTKnUSs"
                    data-testid="shipping-price-value"
                  >
                    <span>
                      <span>$9.99</span>
                    </span>
                  </p>
                </div>
                <p class="YqtVJzMpZD1CZtZteWpP">shipping</p>
              </div>
            </div>
            <div></div>
          </div>
          <div class="rCch2rwblFoMuT5EZMDF">
            <button
              class="pom-Button pom-Button--lightBlue pom-Button--pill-filled pom-Button--card-md"
              id="continue-btn"
              type="button"
              style={{
                letterSpacing: "2px",
                padding: "13px 24px 12px",
                width: "100%",
              }}
            >
              <div class="pom-Button--mouseover"></div>
              <span style={{ opacity: "1" }}>continue</span>
            </button>
          </div>
        </div>
      </section>

      <div class="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
        <div class="GTMCIHGlW0cMt8aM_8eF">
          {data1.map((el) => {
            return (
              <div class="d7eXVr1T6UsgZs2xlsr_">
                <a
                  href="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                  class="pom-Clickable"
                >
                  <div class="pom-Product" data-testid="Product">
                    <div class="pom-Product--header">
                      <div class="pom-Clickable no-action">
                        <div class="pom-ProductCard__Icon">
                          <div class="" width="48" height="48" rotation="none">
                            <svg width="0" height="0">
                              <path d="M0"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <img
                        class="pom-Product--image"
                        alt={el.name}
                        src={el.img}
                      />
                      <div>
                        {el.link === "" ? null : (
                          <div class="pom-Product__HeaderBadges">
                            <span
                              class="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
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
                    <div class="pom-Product--details">
                      <div class="pom-Product--details-cell">
                        <div class="pom-Product__Title">
                          <p>{el.name}</p>
                          <p>{el.title}</p>
                        </div>
                        <div class="pom-Clickable no-action">
                          <div
                            class="pom-ProductSpecifications"
                            style={{ paddingTop: "16px" }}
                          >
                            <div class="pom-ProductSpecifications--flex__center">
                              <div class="pom-CookDuration">
                                <span class="">
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
                                  class="pom-CookDuration__text"
                                  style={{ color: "rgb(0, 160, 223)" }}
                                >
                                  {el.time}
                                </p>
                              </div>
                            </div>
                            <div>
                              {" "}
                              {el.wellness === "WELLNESS" ? (
                                <div class="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                  <span>
                                    <div class="pom-CampaignBadge">
                                      {el.wellness}
                                    </div>
                                  </span>
                                  <span class="" style={{ height: "26px" }}>
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
                      <div class="pom-Product--details-cell"></div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div class="cLLjd0Y1hNVfBOVAfXKe">
          <div class="EejWNgHNdSu6FqN0lKi6">
            <div class="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                class="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span class="t9lDJhwzdcZKrDtgfUL9">Week of February 6th</span>
              </div>
              <a
                class="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                href="/pricing"
              >
                Get cookin’
              </a>
            </div>
          </div>
        </div>
        <div class="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div class="GTMCIHGlW0cMt8aM_8eF">
            {data2.map((el) => {
              return (
                <div class="d7eXVr1T6UsgZs2xlsr_">
                  <a
                    href="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    class="pom-Clickable"
                  >
                    <div class="pom-Product" data-testid="Product">
                      <div class="pom-Product--header">
                        <div class="pom-Clickable no-action">
                          <div class="pom-ProductCard__Icon">
                            <div
                              class=""
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
                          class="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div class="pom-Product__HeaderBadges">
                              <span
                                class="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
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
                      <div class="pom-Product--details">
                        <div class="pom-Product--details-cell">
                          <div class="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div class="pom-Clickable no-action">
                            <div
                              class="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div class="pom-ProductSpecifications--flex__center">
                                <div class="pom-CookDuration">
                                  <span class="">
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
                                    class="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div class="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div class="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span class="" style={{ height: "26px" }}>
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
                        <div class="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div class="cLLjd0Y1hNVfBOVAfXKe">
          <div class="EejWNgHNdSu6FqN0lKi6">
            <div class="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                class="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span class="t9lDJhwzdcZKrDtgfUL9">Week of February 13th</span>
              </div>
              <a
                class="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                href="/pricing"
              >
                Get cookin’
              </a>
            </div>
          </div>
        </div>
        <div class="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div class="GTMCIHGlW0cMt8aM_8eF">
            {data3.map((el) => {
              return (
                <div class="d7eXVr1T6UsgZs2xlsr_">
                  <a
                    href="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    class="pom-Clickable"
                  >
                    <div class="pom-Product" data-testid="Product">
                      <div class="pom-Product--header">
                        <div class="pom-Clickable no-action">
                          <div class="pom-ProductCard__Icon">
                            <div
                              class=""
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
                          class="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div class="pom-Product__HeaderBadges">
                              <span
                                class="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
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
                      <div class="pom-Product--details">
                        <div class="pom-Product--details-cell">
                          <div class="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div class="pom-Clickable no-action">
                            <div
                              class="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div class="pom-ProductSpecifications--flex__center">
                                <div class="pom-CookDuration">
                                  <span class="">
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
                                    class="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div class="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div class="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span class="" style={{ height: "26px" }}>
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
                        <div class="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div class="cLLjd0Y1hNVfBOVAfXKe">
          <div class="EejWNgHNdSu6FqN0lKi6">
            <div class="QGMezQvYQhgyRw919O7_">
              <div
                data-testid="weekly-header-text"
                class="fnkCD6TEBk_6I2WLA_Ly"
              >
                <span class="t9lDJhwzdcZKrDtgfUL9">Week of February 20th</span>
              </div>
              <a
                class="MxFq23yTGUs3dHhvBYeJ SNkK6Ark9JmRypC5TJkI NdO5FRlkE4QuDPCpFm6R DBlWXU92zF7z_vt9ixbv"
                href="/pricing"
              >
                Get cookin’
              </a>
            </div>
          </div>
        </div>
        <div class="ffRNH334lrO0KXus8lN6 FwR0w70tXbsqjpNUPeEJ">
          <div class="GTMCIHGlW0cMt8aM_8eF">
            {data4.map((el) => {
              return (
                <div class="d7eXVr1T6UsgZs2xlsr_">
                  <a
                    href="/recipes/oven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo"
                    class="pom-Clickable"
                  >
                    <div class="pom-Product" data-testid="Product">
                      <div class="pom-Product--header">
                        <div class="pom-Clickable no-action">
                          <div class="pom-ProductCard__Icon">
                            <div
                              class=""
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
                          class="pom-Product--image"
                          alt={el.name}
                          src={el.img}
                        />
                        <div>
                          {el.link === "" ? null : (
                            <div class="pom-Product__HeaderBadges">
                              <span
                                class="pom-FeatureBadge pom-FeatureBadge--redesign pom-FeatureBadge--ready-to-cook"
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
                      <div class="pom-Product--details">
                        <div class="pom-Product--details-cell">
                          <div class="pom-Product__Title">
                            <p>{el.name}</p>
                            <p>{el.title}</p>
                          </div>
                          <div class="pom-Clickable no-action">
                            <div
                              class="pom-ProductSpecifications"
                              style={{ paddingTop: "16px" }}
                            >
                              <div class="pom-ProductSpecifications--flex__center">
                                <div class="pom-CookDuration">
                                  <span class="">
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
                                    class="pom-CookDuration__text"
                                    style={{ color: "rgb(0, 160, 223)" }}
                                  >
                                    {el.time}
                                  </p>
                                </div>
                              </div>
                              <div>
                                {" "}
                                {el.wellness === "WELLNESS" ? (
                                  <div class="pom-ProductSpecifications--campaignSection pom-ProductSpecifications--flex__center pom-ProductSpecifications--divider__vertical">
                                    <span>
                                      <div class="pom-CampaignBadge">
                                        {el.wellness}
                                      </div>
                                    </span>
                                    <span class="" style={{ height: "26px" }}>
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
                        <div class="pom-Product--details-cell"></div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div class="QhEpJCiEG0g0QxY1T3mc">
        <a
          class="MxFq23yTGUs3dHhvBYeJ d0h90AMcvhrPntuRmJ2p Et0v2WnMHJzA3RFmgKLG DBlWXU92zF7z_vt9ixbv HOtcKVJl_0ItLIpdBAtT"
          href="/pricing"
        >
          Get cookin’
        </a>
        <p>Or…</p>
        <p>
          Want to see all our recipes? Check out our{" "}
          <a href="/cookbook">Cookbook.</a>
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