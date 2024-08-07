import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers Request is Sent');
      });


  }




  return (




    <>

<footer className="tj-footer-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="footer-logo-box">
          <a href="#"><img src="https://i.ibb.co/HY0hrrp/R.png" alt /></a>
        </div>
        <div className="footer-menu">
          <nav>
            <ul>
              <li><a href="#about-sec">About</a></li>
              <li><a href="#services-sec">Services</a></li>
              <li><a href="#skill-sec">My Skill</a></li>
              <li><a href="#contact-sec">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="copy-text">
          <p>© 2024 All rights reserved by <a href="#" target="_blank">Rabiul Islam Rizon</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>



    </>
  );
};

export default Footer;
