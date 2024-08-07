import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>
   <div>
  {/* PORTFOLIO SECTION START */}
  <section className="portfolio-section" id="recent-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Recent Works</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and
              you customers.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
            <div className="button-group filter-button-group">
              <button data-filter="*" className="active">All</button>
              <button data-filter=".uxui">WordPress Website</button>
              <button data-filter=".branding">Wordpress Theme</button>
              <button data-filter=".mobile-app">SEO Rank</button>
              <div className="active-bg" />
            </div>
          </div>
          <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
            <div className="portfolio-sizer" />
            <div className="gutter-sizer" />
            <div className="portfolio-item branding">
              <div className="image-box">
                <img src="https://i.ibb.co/F7NfCss/1-2.webp" alt />
              </div>
              <div className="content-box">
                <h3 className="portfolio-title">Deloitte</h3>
                <p>Project was about precision and information.</p>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
              </div>
            </div>
            <div className="portfolio-item uxui">
              <div className="image-box">
                <img src="https://i.ibb.co/H2FcwzT/ecommerce-web-design-services-jpg.webp" alt />
              </div>
              <div className="content-box">
                <h3 className="portfolio-title">New Age</h3>
                <p>Project was about precision and information.</p>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
              </div>
            </div>
            <div className="portfolio-item mobile-app">
              <div className="image-box">
                <img src="https://i.ibb.co/YPFsRMZ/4.webp" alt />
              </div>
              <div className="content-box">
                <h3 className="portfolio-title">Sebastian</h3>
                <p>Project was about precision and information.</p>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
              </div>
            </div>
            <div className="portfolio-item branding">
              <div className="image-box">
                <img src="https://i.ibb.co/7N0nztK/2-1.webp" alt />
              </div>
              <div className="content-box">
                <h3 className="portfolio-title">Mochnix</h3>
                <p>Project was about precision and information.</p>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* PORTFOLIO SECTION END */}
  {/* start: Portfolio Popup */}
  <div id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide" data-lenis-prevent>
    <div className="popup_modal_img">
      <img src="./assets/img/portfolio/modal-img.jpg" alt />
    </div>
    <div className="popup_modal_content">
      <div className="portfolio_info">
        <div className="portfolio_info_text">
          <h2 className="title">DStudio</h2>
          <div className="desc">
            <p>
              They are was greater open above shelter lets itself under appear sixth open gathering made upon
              can't own above midst
              gathering gathered he one us saying can't divide.
            </p>
          </div>
          <a href="#" className="btn tj-btn-primary">live preview <i className="fal fa-arrow-right" /></a>
        </div>
        <div className="portfolio_info_items">
          <div className="info_item">
            <div className="key">Category</div>
            <div className="value">Web Design</div>
          </div>
          <div className="info_item">
            <div className="key">Client</div>
            <div className="value">Artboard Studio</div>
          </div>
          <div className="info_item">
            <div className="key">Start Date</div>
            <div className="value">August 20, 2023</div>
          </div>
          <div className="info_item">
            <div className="key">Designer</div>
            <div className="value"><a href="#">ThemeJunction</a></div>
          </div>
        </div>
      </div>
      <div className="portfolio_gallery owl-carousel">
        <div className="gallery_item">
          <img src="./assets/img/portfolio-gallery/p-gallery-1.jpg" alt />
        </div>
        <div className="gallery_item">
          <img src="./assets/img/portfolio-gallery/p-gallery-2.jpg" alt />
        </div>
        <div className="gallery_item">
          <img src="./assets/img/portfolio-gallery/p-gallery-3.jpg" alt />
        </div>
        <div className="gallery_item">
          <img src="./assets/img/portfolio-gallery/p-gallery-4.jpg" alt />
        </div>
      </div>
      <div className="portfolio_description">
        <h2 className="title">Project Description</h2>
        <div className="desc">
          <p>
            The goal is there are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some
            form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by
            injected humour, or randomised words which don't look even slightly believable. If you are going to
            use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
      </div>
      <div className="portfolio_story_approach">
        <div className="portfolio_story">
          <div className="story_title">
            <h4 className="title">The story</h4>
          </div>
          <div className="story_content">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There
              are many variations of
              passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or
              randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
              be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="portfolio_approach">
          <div className="approach_title">
            <h4 className="title">OUR APPROACH</h4>
          </div>
          <div className="approach_content">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There
              are many variations of
              passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or
              randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to
              be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio_navigation">
        <div className="navigation_item prev-project">
          <a href="#" className="project">
            <i className="fal fa-arrow-left" />
            <div className="nav_project">
              <div className="label">Previous Project</div>
              <h3 className="title">Sebastian</h3>
            </div>
          </a>
        </div>
        <div className="navigation_item next-project">
          <a href="#" className="project">
            <div className="nav_project">
              <div className="label">Next Project</div>
              <h3 className="title">Qwillo</h3>
            </div>
            <i className="fal fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* end: Portfolio Popup */}
  {/* RESUME SECTION START */}
  <section className="resume-section" id="resume-section">
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="section-header wow fadeInUp" data-wow-delay=".3s">
            <h2 className="section-title"><i className="flaticon-recommendation" id="about-sec" /> My Experience</h2 >
          </div>
          <div className="resume-widget">
            <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
              <div className="time">2020 - Present</div>
              <h3 className="resume-title">WoedPress Developer</h3>
              <div className="institute">WPThemeGuru, Bangladesh</div>
            </div>
            <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
              <div className="time">2021 - Present</div>
              <h3 className="resume-title">Full Stack Web Developer</h3>
              <div className="institute">AtTheRate, Bangladesh</div>
            </div>
            <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
              <div className="time">2020 - Present</div>
              <h3 className="resume-title">SEO Expert</h3>
              <div className="institute">AbsoluteSquad.com, USA</div>
            </div>
            <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
              <div className="time">2021 - Present</div>
              <h3 className="resume-title">Web Designer</h3>
              <div className="institute">Shah M Polash, Bangladesh</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-header wow fadeInUp" data-wow-delay=".4s">
            <h2 className="section-title"><i className="flaticon-graduation-cap" /> My Education</h2>
          </div>
          <div className="resume-widget">
            <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
              <div className="time">2020 - 2024</div>
              <h3 className="resume-title">Dip in Computer Engineer </h3>
              <div className="institute">TTEI (Bogura)</div>
            </div>
            <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
              <div className="time">2021 - 2023</div>
              <h3 className="resume-title">WordPress Expert Award</h3>
              <div className="institute">AtTherate</div>
            </div>
            <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
              <div className="time">2021 - 2024</div>
              <h3 className="resume-title">SEO Award</h3>
              <div className="institute">AbsoluteSquad.com</div>
            </div>
            <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
              <div className="time">2018 - 2019</div>
              <h3 className="resume-title">SSC </h3>
              <div className="institute">G.A.J.BL , High School</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* RESUME SECTION END */}
</div>


    </>
  );
};

export default AboutSection;
