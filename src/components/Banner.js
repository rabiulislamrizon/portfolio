import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>
      
       <section className="hero-section d-flex align-items-center" id="intro">
  <div className="intro_text">
    <svg viewBox="0 0 1320 300">
      <text x="50%" y="50%" textAnchor="middle">HI</text>
    </svg>
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="hero-content-box">
          <span className="hero-sub-title">I am RiZon</span>
          <h1 className="hero-title">Web Developer &<br />SEO Expert</h1>
          <div className="hero-image-box d-md-none text-center">
            <img src="assets/img/hero/me.png" alt />
          </div>
          <p className="lead">
          You can Create a Website from us for any of your Business or SEO Services.I am an expert on SEO & Web Development according to your requrements, such as business,blog,news,eCommerce,Agency,LMS,real estate,portfolio websites,etc.
          </p>
          <div className="button-box d-flex flex-wrap align-items-center">
            <a href="#" className="btn tj-btn-secondary">Download CV <i className="flaticon-download" /></a>
            <ul className="ul-reset social-icons">
              <li>
                <a href="#"><i className="fa-brands fa-twitter" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-light fa-basketball" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-github" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-none d-md-block">
        <div className="hero-image-box text-center">
          <img src="https://i.ibb.co/9vrGKt2/profile-pic-10.png" alt />
        </div>
      </div>
    </div>
    <div className="funfact-area">
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
            <div className="number"><span className="odometer" data-count={4}>0</span></div>
            <div className="text">Years of <br />Experience</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
            <div className="number"><span className="odometer" >999</span>+</div>
            <div className="text">Project <br />Completed</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
            <div className="number"><span className="odometer">1.1</span>k</div>
            <div className="text">Happy <br />Clients</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
            <div className="number"><span className="odometer" >30</span></div>
            <div className="text">Winning of <br />Award</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  );
};

export default Banner;
