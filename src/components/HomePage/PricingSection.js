import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (




    <>

      <section id="pricing" className="pricing-plan section-space overflow-hidden parallax-element">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-3__title-wrapper pricing-plan__content text-center mb-60 mb-sm-50 mb-xs-40">
                <span className="section-3__subtitle justify-content-center mb-10 mb-xs-5 wow fadeIn animated" data-wow-delay=".1s"><span className="layer" data-depth="0.009">Simple</span> Pricing Plan</span>
                <h2 className="section-3__title lg wow fadeIn animated" data-wow-delay=".3s">Easy-to-Understand Pricing Model For Startups.</h2>
              </div>
            </div>
          </div>
          <div className="row gx-60 mb-minus-60">

            {
              pricing.map(b => b.packageName === 'Basic' && <div className="col-xl-4 col-md-6">
                <div className="pricing-plan__item mb-60 wow fadeIn animated" data-wow-delay=".5s">
                  <div className="pricing-plan__item-header d-flex flex-column" style={{
                    backgroundImage:
                      "url(https://i.ibb.co/k1NTtxY/pricing-plan-header.png)",

                  }}>
                    <span className="pricing-plan__item-header-label">{b.packageName} Plan</span>
                    <div className="pricing-plan__item-header-icon mb-30">
                      <img src="assets/imgs/pricing-plan/pricing-plan__item-01.png" alt="image not found" />
                    </div>
                    <h2 className="mb-10">${b.packagePrice} <span>.00</span></h2>
                    <p className="mb-0">Perfect Plan For Basic.</p>
                  </div>
                  <div className="pricing-plan__item-body">
                    <p className="mb-20">Includes:</p>
                    <ul>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{b.packagePointOne}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{b.packagePointTwo}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{b.packagePointThree}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{b.packagePointFour}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{b.packagePointFive}</li>
                    </ul>
                    <Link to={`/order-now/${b._id}`} className="rr-btn rr-btn__theme-3 mt-50 mt-sm-40 mt-xs-35">
                      <span className="btn-wrap">
                        <span className="text-one"> {b.packageButtonText} <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <span className="text-two"> {b.packageButtonText} <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                      </span>
                    </Link>

                  </div>
                </div>
              </div>)}

            {
              pricing.map(p => p.packageName === 'Premium' && <div className="col-xl-4 col-md-6">
                <div className="pricing-plan__item mb-60 wow fadeIn animated" data-wow-delay=".7s">
                  <div className="pricing-plan__item-header d-flex flex-column" style={{
                    backgroundImage:
                      "url(https://i.ibb.co/k1NTtxY/pricing-plan-header.png)",

                  }}>
                    <span className="pricing-plan__item-header-label">{p.packageName} Plan</span>
                    <div className="pricing-plan__item-header-icon mb-30">
                      <img src="assets/imgs/pricing-plan/pricing-plan__item-02.png" alt="image not found" />
                    </div>
                    <h2 className="mb-10">${p.packagePrice} <span>.00</span></h2>
                    <p className="mb-0"> Perfect Plan For Premium.    </p>
                  </div>
                  <div className="pricing-plan__item-body">
                    <p className="mb-20">Includes:</p>
                    <ul>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{p.packagePointOne}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{p.packagePointTwo}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{p.packagePointThree}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{p.packagePointFour}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{p.packagePointFive}</li>
                    </ul>
                    <Link to={`/order-now/${p._id}`} className="rr-btn rr-btn__theme-3 mt-50 mt-sm-40 mt-xs-35">
                      <span className="btn-wrap">
                        <span className="text-one"> {p.packageButtonText} <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <span className="text-two"> {p.packageButtonText} <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>)}

            {
              pricing.map(s => s.packageName === 'Standard' && <div className="col-xl-4 col-md-6">
                <div className="pricing-plan__item mb-60 wow fadeIn animated" data-wow-delay=".9s">
                  <div className="pricing-plan__item-header d-flex flex-column" style={{
                    backgroundImage:
                      "url(https://i.ibb.co/k1NTtxY/pricing-plan-header.png)",

                  }}>
                    <span className="pricing-plan__item-header-label">{s.packageName} Plan</span>
                    <div className="pricing-plan__item-header-icon mb-30">
                      <img src="assets/imgs/pricing-plan/pricing-plan__item-03.png" alt="image not found" />
                    </div>
                    <h2 className="mb-10">${s.packagePrice} <span>.00</span></h2>
                    <p className="mb-0">Perfect Plan For Standard.</p>
                  </div>
                  <div className="pricing-plan__item-body">
                    <p className="mb-20">Includes:</p>
                    <ul>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{s.packagePointOne}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{s.packagePointTwo}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{s.packagePointThree}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{s.packagePointFour}</li>
                      <li><img src="assets/imgs/pricing-plan/check.png" alt="image not found" />{s.packagePointFive}</li>
                    </ul>
                    <Link to={`/order-now/${s._id}`} className="rr-btn rr-btn__theme-3 mt-50 mt-sm-40 mt-xs-35">
                      <span className="btn-wrap">
                        <span className="text-one">Purchase Plan <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <span className="text-two">Purchase Plan <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7H15" stroke="#010915" strokeOpacity="0.24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 1L15 7L9 13" stroke="#010915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>)}

          </div>
        </div>
      </section>


    </>
  );
};

export default PricingSection;