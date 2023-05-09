import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import "./Single.css"
import IIcon from './IIcon';
import { Footer } from './footer';
const Singlepage = () => {
  const { id } = useParams()
  const [data,setdata]=useState([])
  useEffect(() => {
   
    axios
      .get(`https://wild-pink-slug-sock.cyclic.app/onthemenue1/${id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data);
      });
  }, [id])

  
  
  
  console.log(data)
  const {
    img,
    link,
    name,
    title,
    time,
    Servings,
    FromtheTestKitchen,
    description,
    CLICKFORRECIPECARD,
    
    IMGIN,
    
    IM1,
   
    INDE,
    IM2,
    
    INDE2,
    IM3,
    
    INDE3,
  } = data;
  return (
    <div>
      
      <div class="container owl-container healthv2">
       
            
              <section class="section-recipe recipe-main row">
                <div class="ba-hero-image col-sm-7">
                  <div class="ba-hero-image__hldr">
                    <img
                      width="600px"
                      height="600px"
                      style={{ height: "auto" }}
                      class="img-max"
                      alt=" "
                      src={img}
                    />
                  </div>
              <span class="Ready to Cook feature-badge">{link}</span>
                </div>
                <div class="col-sm-5">
                  <div class="ba-recipe-title p-15">
                    <h1 class="ba-recipe-title__main">
                      {name}
                    </h1>
                    <h2 class="ba-recipe-title__sub mt-10">
                  {title}
                    </h2>
                    <div class="ba-recipe--details">
                      <div class="ba-recipe--detail ba-recipe-subtitle__cook-time">
                        <svg
                         
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          class="icon-svg icon-svg--clock viewBox='0 0 18 18'"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g stroke="#00A0DF" stroke-width="1.5">
                              <g>
                                <g>
                                  <g transform="translate(-66 -387) translate(50 80) translate(16 305) translate(0 2)">
                                    <circle cx="9" cy="9" r="8.25"></circle>
                                    <path
                                      stroke-linecap="round"
                                      d="M8.5 5L8.5 10 12 12"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                    <span class="total-time">{time}</span>
                        <span content="PT55M" itemprop="totalTime"></span>
                      </div>
                    </div>
                    <span class="ba-recipe-subtitle__ww-badge"></span>
                  </div>
                  <div class="ba-recipe-detail recipe-display-price">
                    <span
                      class="ba-recipe--detail ba-recipe-servings"
                      itemprop="recipeYield"
                    >
                    {Servings}
                    </span>
                  </div>
                 
                  <div class="recipe-main__description p-15">
                    <h4 class="recipe-main__description-title">
                      {FromtheTestKitchen}
                    </h4>
                    <p itemprop="description">
                     {description}
                      <br />
                      
                    <strong>{CLICKFORRECIPECARD}</strong>
                      
                    </p>
                    <a
                      class="btn btn-orange get-cooking-btn"
                      name="button"
                      href="/pricing"
                    >
                      <span class="btn-txt">Get Cooking</span>
                    </a>
                  </div>
                  <div class="nutrition-container p-15">
                    <ul class="nutrition-list">
                      <li class="nutrition-list--item nutrition-list--item__heading">
                        <div class="item-title">Nutrition</div>
                        <div class="item-value">PER SERVING</div>
                      </li>
                      <li class="nutrition-list--item">
                        <div class="item-title">Calories</div>
                        <div class="item-value">
                          <span
                            itemprop="nutrition"
                            itemscope=""
                            
                          >
                            <span itemprop="calories">850</span>
                          </span>
                          Cals
                        </div>
                      </li>
                    </ul>
                    <div class="view-full-nutrition-container js-NutritionCalories is-calculatedCalories">
                      <span class="view-full-nutrition-link">
                        View Full Nutrition
                      </span>
                   
                    </div>
                  </div>
                  <div id="js-WinePairing"></div>
                </div>
              </section>

              <section class="section-recipe recipe-ingredients p-15">
                <div class="ba-section-title row">
                  <div class="col-xs-7">
                    <div class="ba-section-title__super">fresh</div>
                    <div class="ba-section-title__main">ingredients</div>
                  </div>
                </div>
                <div class="rec-area-content">
                  <div class="row">
                    <div class="ba-feature-image ingredients-img-hldr col-md-8">
                      <div class="ba-feature-image__hldr">
                        <img
                          class="img-max"
                          alt="Oven-Baked Cheesy Chicken Thighs with Rice, Spinach &amp; BBQ Mayo"
                          style={{ height: "100%" }}
                          width="700px"
                          height="477px"
                          loading="lazy"
src={IMGIN}                        />
                        <div class="ing-modal" id="js-IngModal">
                          <div class="ing-modal-title">
                            <h5>Title</h5>
                            <i class="close-icon js-IngModalClose"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="ba-info-list ba-info-list--stacked col-md-4">
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>12 oz</span>
                          Boneless, Skinless Chicken Thighs
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>1 Tbsp</span>
                          Southern Spice Blend (Onion Powder, Garlic Powder,
                          Ground Yellow Mustard, Smoked Paprika &amp; Cayenne
                          Pepper)
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>½ cup</span>
                          Long Grain White Rice
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>⅓ cup</span>
                          Mirepoix
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>3 oz</span>
                          Baby Spinach
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>2 Tbsps</span>
                          Mayonnaise
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>¼ cup</span>
                          Barbecue Sauce
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>2 oz</span>
                          Shredded Cheddar &amp; Monterey Jack Cheese Blend
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>½ oz</span>
                          Sweety Drop Peppers
                        </div>
                      </li>
                      <li
                        class="ba-info-list__item"
                        itemprop="recipeIngredient"
                      >
                        <div class="non-story">
                          <span>1</span>
                          Single-Use Aluminum Tray
                        </div>
                      </li>
                      <input id="last_index" type="hidden" value="0" />
                    </ul>
                  </div>
                </div>
              </section>

              <section class="section-recipe recipe-instructions p-15">
                <div class="ba-section-title row">
                  <div class="col-xs-8">
                    <div class="ba-section-title__super">step-by-step</div>
                    <div class="ba-section-title__main">instructions</div>
                  </div>
                  <div class="col-xs-4 header-side-cta small-hide">
                    <a
                      class="step-link js-StepLaunch header-cook-along-btn"
                      href=" "
                    >
                      <span class="step-link-text">Cook Along</span>
                      <span class="cook-along-triangle-container">
                        <svg
                          width="12px"
                          height="13px"
                          viewBox="2 -0.5 14 15"
                          class="cook-along-triangle-svg"
                        >
                          <title>Triangle</title>
                          <desc>Created with Sketch.</desc>
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Cook-Along"
                              transform="translate(-1272.000000, -257.000000)"
                              fill="#FFFFFF"
                            >
                              <g
                                id="instructions"
                                transform="translate(135.000000, 234.000000)"
                              >
                                <g
                                  id="Group-7-Copy-10"
                                  transform="translate(963.000000, 3.000000)"
                                >
                                  <polygon
                                    id="Triangle"
                                    transform="translate(180.794872, 27.405983) rotate(90.000000) translate(-180.794872, -27.405983) "
                                    points="180.794872 20.6837607 188.034188 34.1282051 173.555556 34.1282051"
                                  ></polygon>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="step row">
                  <div class="col-md-6 col-xs-12">
                    <img
                      alt="Prepare the ingredients &amp; make the base"
                      class="img-max"
                      width="512px"
                      height="340px"
                      style={{ height: "auto" }}
                      loading="lazy"
                  src={IM1} />
                    <div class="p-15" itemprop="recipeInstructions">
                      <div class="step-title-holder">
                        <span class="step-number">1</span>
                        <span class="step-title">
                          Prepare the ingredients &amp; make the base
                        </span>
                      </div>
                      <div class="step-txt">
                        <p>
                          {INDE}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <img
                      alt="Prepare the chicken &amp; bake the tray "
                      class="img-max"
                      width="512px"
                      height="340px"
                      style={{ height: "auto" }}
                      loading="lazy"
src={IM2}                    />
                    <div class="p-15" itemprop="recipeInstructions">
                      <div class="step-title-holder">
                        <span class="step-number">2</span>
                        <span class="step-title">
                          Prepare the chicken &amp; bake the tray
                        </span>
                      </div>
                      <div class="step-txt">
                        <p>
                         {INDE2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="step row">
                  <div class="col-md-6 col-xs-12">
                    <img
                      alt="Make the BBQ mayo &amp; serve your dish "
                      class="img-max"
                      width="512px"
                      height="340px"
                      style={{ height: "auto" }}
                      loading="lazy"

src={IM3}                />
                    <div class="p-15" itemprop="recipeInstructions">
                      <div class="step-title-holder">
                        <span class="step-number">3</span>
                        <span class="step-title">
                          Make the BBQ mayo &amp; serve your dish
                        </span>
                      </div>
                      <div class="step-txt">
                        <p>
                          {INDE3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
          );
      
      

        <section class="section-recipe recipe-comments p-15 js-jumpToSocialTarget">
          <div class="row">
            <div class="col-md-6">
              <h3>Tips from Home Chefs</h3>
              <div
                class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                data-num-posts="3"
                data-width="100%"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="app_id=268433919926057&amp;container_width=569&amp;height=100&amp;href=http%3A%2F%2Fwww.blueapron.com%2Frecipes%2Foven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo&amp;locale=en_US&amp;sdk=joey&amp;version=v2.7&amp;width="
                style={{width: "100%"}}
              >
                <span
                  style={{
                    verticalAlign: "bottom",
                    width: "100%",
                    height: "212px",
                  }}
                >
                  <iframe
                    name="f131f0d5485017c"
                    width="1000px"
                    height="100px"
                    data-testid="fb:comments Facebook Social Plugin"
                    title="fb:comments Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v2.7/plugins/comments.php?app_id=268433919926057&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df28913a96656304%26domain%3Dwww.blueapron.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.blueapron.com%252Ff74ca33787d8c8%26relation%3Dparent.parent&amp;container_width=569&amp;height=100&amp;href=http%3A%2F%2Fwww.blueapron.com%2Frecipes%2Foven-baked-cheesy-chicken-thighs-with-rice-spinach-bbq-mayo&amp;locale=en_US&amp;sdk=joey&amp;version=v2.7&amp;width="
                    style={{
                      verticalAlign: "bottom",
                      width: "100%",
                      height: "212px",
                    }}
                    class=""
                  ></iframe>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div><IIcon/></div>
      <div><Footer/></div>
    </div>
  );
}
export default Singlepage