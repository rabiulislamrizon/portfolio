import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    <>

      <section className="services-section" id="services-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Quality Services</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                  you customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="services-widget position-relative">
                <div className="service-item current d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".5s">
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="service-title">Web Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Web development services encompassing design, programming, and optimization for effective online presence and user engagement.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
                </div>
                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".6s">
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">02</span>
                    <h3 className="service-title">Completed SEO </h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Comprehensive SEO services ensuring website visibility, traffic growth, and high rankings through strategic optimization and content enhancement.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
                </div>
                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".7s">
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">03</span>
                    <h3 className="service-title">WordPress Web Design</h3>
                  </div>
                  <div className="right-box">
                    <p>
                    Offering comprehensive WordPress web design services to enhance your online presence, user experience, and business growth effectively and efficiently.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
                </div>
                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".8s">
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">04</span>
                    <h3 className="service-title">Custom Website Design</h3>
                  </div>
                  <div className="right-box">
                    <p>
                    Tailored custom website design services that capture your brand essence, optimize user experience, and maximize online impact and engagement.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
                </div>
                <div className="active-bg wow fadeInUp" data-wow-delay=".5s" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>


  );
};

export default ServicesSection;
