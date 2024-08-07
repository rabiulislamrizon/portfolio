import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (



    <>

<section className="testimonial-section" id="testimonials-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="section-header">
          <h2 className="section-title wow fadeInLeft" data-wow-delay=".3s">My Client's Stories</h2>
          <p className="wow fadeInLeft" data-wow-delay=".4s">Empowering people in new a digital journey with my
            super services</p>
        </div>
      </div>
      <div className="col-lg-7 col-xl-6 offset-xl-1">
        <div className="testimonials-widget wow fadeInRight" data-wow-delay=".5s">
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/1.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/1.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint0_linear_263_588)" />
                  <defs>
                    <linearGradient id="paint0_linear_263_588" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint1_linear_263_589)" />
                  <defs>
                    <linearGradient id="paint1_linear_263_589" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Brandon Fraser</h4>
              <span className="designation">Senior Software Dev, Cosmic Sport</span>
            </div>
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/2.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/2.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint2_linear_263_511)" />
                  <defs>
                    <linearGradient id="paint2_linear_263_511" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint3_linear_263_510)" />
                  <defs>
                    <linearGradient id="paint3_linear_263_510" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Tim Bailey</h4>
              <span className="designation">SEO Specialist, Theme Junction</span>
            </div>
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/1.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/1.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint4_linear_263_512)" />
                  <defs>
                    <linearGradient id="paint4_linear_263_512" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint5_linear_263_513)" />
                  <defs>
                    <linearGradient id="paint5_linear_263_513" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Brandon Fraser</h4>
              <span className="designation">Senior Software Dev, Cosmic Sport</span>
            </div>
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/2.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/2.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint6_linear_263_514)" />
                  <defs>
                    <linearGradient id="paint6_linear_263_514" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint7_linear_263_515)" />
                  <defs>
                    <linearGradient id="paint7_linear_263_515" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Tim Bailey</h4>
              <span className="designation">SEO Specialist, Theme Junction</span>
            </div>
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/1.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/1.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint8_linear_263_512)" />
                  <defs>
                    <linearGradient id="paint8_linear_263_512" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint9_linear_263_513)" />
                  <defs>
                    <linearGradient id="paint9_linear_263_513" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Brandon Fraser</h4>
              <span className="designation">Senior Software Dev, Cosmic Sport</span>
            </div>
            <div className="testimonial-item">
              <div className="top-area d-flex flex-wrap justify-content-between">
                <div className="logo-box">
                  <img src="assets/img/testimonials/logo/2.png" alt />
                </div>
                <div className="image-box">
                  <img src="assets/img/testimonials/user/2.jpg" alt />
                </div>
              </div>
              <div className="icon-box">
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint10_linear_263_514)" />
                  <defs>
                    <linearGradient id="paint10_linear_263_514" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint11_linear_263_515)" />
                  <defs>
                    <linearGradient id="paint11_linear_263_515" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                      <stop offset={1} stopColor="var(--tj-theme-primary)" />
                      <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                value to my business.</p>
              <h4 className="name">Tim Bailey</h4>
              <span className="designation">SEO Specialist, Theme Junction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>



  );
};

export default TestimonialSection;
