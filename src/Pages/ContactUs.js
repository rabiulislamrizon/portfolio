import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Message is Send');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (





    <>

      <section className="contact-section" id="contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                <div className="section-header">
                  <h2 className="section-title">Let’s work together!</h2>
                  <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                </div>
                <div className="tj-contact-form">
                  <form id="contact-form">
                    <div className="row gx-3">
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input type="text" name="conName" id="conName" placeholder="First name" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input type="text" name="conLName" id="conLName" placeholder="Last name" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input type="email" name="conEmail" id="conEmail" placeholder="Email address" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_group">
                          <select name="conService" id="conService" className="tj-nice-select">
                            <option value selected disabled>Choose Service</option>

                            <option value="web">Web Design</option>
                            <option value="uxui">SEO Services</option>

                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_group">
                          <textarea name="conMessage" id="conMessage" placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_btn">
                          <button type="submit" className="btn tj-btn-primary">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
              <div className="contact-info-list">
                <ul className="ul-reset">
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                    <div className="icon-box">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="text-box">
                      <p>Phone</p>
                      <a href="tel:0123456789">+880 1917435981</a>
                    </div>
                  </li>
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                    <div className="icon-box">
                      <i className="flaticon-mail-inbox-app" />
                    </div>
                    <div className="text-box">
                      <p>Email</p>
                      <a href="mailto:contact.rijonislam@gmail.com
">contact.rijonislam@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                    <div className="icon-box">
                      <i className="flaticon-location" />
                    </div>
                    <div className="text-box">
                      <p>Address</p>
                      <a href="#">Shah Para Khalshi , <br />Gobindaganj, Bangladesh</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>





  );
};

export default ContactUs;