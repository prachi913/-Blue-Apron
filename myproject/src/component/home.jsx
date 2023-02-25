import React, { useEffect } from 'react'
// import React from "react";
import "./Home.css";
import { useState } from 'react';
// import All from './icon';
// import LargeWithAppLinksAndSocial from "./footer"
// import { Icon } from './icon';
import IIcon from './IIcon';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
const getdata = () => {
  return fetch("http://localhost:3000/meals")
    .then((res) =>res.json()
    
  )
}
const getdata2 = () => {
  return fetch("http://localhost:3000/weeklyoptions").then((res) => res.json());
};
const Home = () => {
  const [data, setdata] = useState([])
  const [data1,setdata1]=useState([])
  
  const fetchdata = async() => {
    try {
      let data = await getdata()
      setdata(data)
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   fetchdata() 
  }, [])
  // console.log(data)
   const fetchdata1 = async () => {
     try {
       let data = await getdata2();
       setdata1(data);
      //  console.log(data);
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     fetchdata1();
   }, []);
   console.log(data1);
  return (
    <div>
      <section className="cta-splash">
        <div className="background-image-overlay hero">
          <img
            alt="A spread of Blue Apron meals and ingredients"
            className="homepage-hero"
            src="https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&amp;quality=90&amp;format=pjpg"
          />
          <div className="top-container">
            <div className="top-container-txt">
              <h1 className="hero-title js-hero-image-title">
                The meal kit that puts quality first
              </h1>
            <Link
                className="btn get-cooking-btn"
                id="splash-get-cooking-btn"
                to="/pricing"
              >
                Get Cookin’
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page-section">
        <span className="section-title">465+ million meals shipped</span>
        <p className="section-description">
          See why home cooks stick with the original American meal kit.
        </p>
        <div className="why-ba-section">
          {data.map((el) => {
            return (
              <div className="ba-photo" key={el.id}>
                <img src={el.img} alt={el.darkexp} />
                <p className="ba-photo-title">{el.darkexp}</p>
                <p className="ba-photo-subtitle">{el.about1}</p>
                <p className="ba-photo-subtitle">{el.about2}</p>
              </div>
            );
          })}
        </div>
        <p className="get-started">
          Get started for as little as{" "}
          <span className="text-style-1">$7.99 per serving</span>
        </p>
      <Link
          className="btn get-cooking-btn"
          id="splash-get-cooking-btn"
          to="/pricing"
        >
          Get Cookin’
        </Link>
      </section>
      <section class="weekly-options-section">
        <h2 class="section-title"></h2>
        <h2 class="section-main-title">Choose from</h2>
        <h2 class="section-sub-title">70+ weekly options</h2>
        <div class="weekly-photo-section">
          {data1.map((el) => {
            return (
              <div>
                <img src={el.img} alt={el.name} />
                <p class="title">{el.anything}</p>
                <p class="sub-title">{el.name}</p>
              </div>
            );
          })}
        </div>
      <Link
          class="btn browse-menus-btn"
          onclick="{browseMenuClick}"
          id="browse-menus-btn"
          to="/on-the-menu"
        >
          Browse Our Menus
        </Link>
      </section>
      <section class="testimonial-section">
        <img
          src="https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&amp;quality=90"
          alt="A chef tossing diced carrots int</Link pot"
          loading="lazy"
        />
        <div class="fixed">
          <img
            src="https://media.blueapron.com/assets/registration/homepage/texture-pattern.webp?height=20&amp;quality=90"
            alt="carbon neutral"
            loading="lazy"
          />
          <p class="title">Celebrating 10 years of happy customers</p>
          <p class="testimonial-text" id="testimonial-text">
            We love Blue Apron! It eliminate ton of food waste while allowing
            us to try new things and have tasty meals. Really great quality
            food, awesome flavors, and things we wouldn't otherwise have any
            idea how to create.
          </p>
          <div class="rectangle"></div>
          <p class="user-name" id="testimonial-user-name">
            — Christy
          </p>
        </div>
      </section>
      <section class="carbon-neutral-section">
        <img
          class="carbon-background"
          src="https://media.blueapron.com/assets/registration/homepage/green-field.png?height=400&amp;quality=90"
          alt="carbon neutral"
          loading="lazy"
        />
        <div class="fixed">
          <img
            class="hand-icon"
            src="https://media.blueapron.com/assets/registration/homepage/hand-icon.svg"
            alt="hand holding leaf"
            loading="lazy"
          />
          <p class="title">We’re proud to b</p>
          <p class="sub-title">carbon neutral company</p>
        <Link
            class="carbon-neutral-btn"
            onclick="{carbonClick}"
            id="carbon-neutral-btn"
            to="https://blog.blueapron.com/carbon-neutral/"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section class="getting-started-section">
        <img
          src="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&amp;quality=90"
          alt="A spread of ingredients fo</Link gnocchi dish"
          loading="lazy"
        />
        <div class="fixed">
          <p class="title">Get started now</p>
          <p class="sub-title">
            for as little as
            <span>$7.99 per serving</span>
          </p>
        <Link
            class="get-cookin btn splash-get-started-btn"
            id="splash-get-started-btn"
            to="/pricing"
          >
            Get Cookin'
          </Link>
        </div>
      </section>
      <div
        class="mobile-only center-t get-started-btn-mobile-container"
        id="get-started-btn-mobile-container"
        // style="visibility: visible"
      >
      <Link
          class="btn get-cooking-btn-mobile get-started-btn-mobile"
          id="get-started-btn-mobile"
          name="button"
          to="/pricing"
        >
          Get Cookin’
        </Link>
      </div>
      <div class="ios-app-hide" id="body-push"></div>

      <div>
        <div>
          <IIcon/>
        </div>
        
      
      <div>
        <Footer />
        </div>
        </div>
    </div>
  );
}

export default Home