import React from 'react';

const RecentProject = () => {
   
  
    return (
        <> <div id="portfolio-sec" className="popup_content_area zoom-anim-dialog mfp-hide" data-lenis-prevent >
  <div className="popup_modal_img">
    <img src="./assets/img/services/modal-img.jpg" alt />
  </div>
  <div className="popup_modal_content">
    <div className="service_details">
      <div className="row">
        <div className="col-lg-7 col-xl-8">
          <div className="service_details_content">
            <div className="service_info">
              <h6 className="subtitle">SERVICES</h6>
              <h2 className="title">UI/UX Design</h2>
              <div className="desc">
                <p>
                  Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a
                  load of old tosh is
                  cracking goal blow off telling brown.
                </p>
                <p>
                  Brolly show off show off pick your nose and blow off well A bit of how’s your father
                  tomfoolery blimey, me old
                  mucker starkers Queen’s English dropped a clanger bite your arm spiffing good time
                  burke Why chancer. Hotpot bum
                  bag cracking goal young delinquent naff bugger cup of chars bender loo it’s all gone to
                  pot the nancy cheeky.
                </p>
                <p>
                  At public school cras bog some dodgy chav Richard Why argy bargy vagabon William bender
                  matie boy, off his nut
                  chancer Jeffrey up the kyver say mufty you mug ummm telling pear shaped Oxford owt to
                  do with me do one so said
                  are you taking his.
                </p>
              </div>
              <h3 className="title">Services Process</h3>
              <div className="desc">
                <p>
                  Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a
                  load of old tosh is
                  cracking goal blow off telling brown.
                </p>
              </div>
              <ul>
                <li>Reinvent Your Business to Better</li>
                <li>Pioneering the Internet's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
                <li>Pioneering the Design World's First</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="tj_main_sidebar">
            <div className="sidebar_widget services_list">
              <div className="widget_title">
                <h3 className="title">All Services</h3>
              </div>
              <ul>
                <li className="active">
                  <button>
                    <i className="flaticon-design" />
                    Branding Design
                  </button>
                </li>
                <li>
                  <button>
                    <i className="flaticon-3d-movie" />
                    3D Animation
                  </button>
                </li>
                <li>
                  <button>
                    <i className="flaticon-ux-design" />
                    UI/UX Design
                  </button>
                </li>
                <li>
                  <button>
                    <i className="flaticon-web-design" />
                    Web Design
                  </button>
                </li>
                <li>
                  <button>
                    <i className="flaticon-ui-design" />
                    App Design
                  </button>
                </li>
              </ul>
            </div>
            <div className="sidebar_widget contact_form">
              <div className="widget_title">
                <h3 className="title">Get in Touch</h3>
              </div>
              <form action="index.html">
                <div className="form_group">
                  <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                </div>
                <div className="form_group">
                  <input type="email" name="semail" id="semail" placeholder="Email" autoComplete="off" />
                </div>
                <div className="form_group">
                  <textarea name="smessage" id="smessage" placeholder="Your message" autoComplete="off" defaultValue={""} />
                </div>
                <div className="form_btn">
                  <button className="btn tj-btn-primary" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
        
    );
};

export default RecentProject;