import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (



    // <>  

    // {
    //   logo.map(l=><header className="w-100 flaot-left header-con main-box nav-bg position-relative">
    //     <div className="wrapper">
    //       <nav className="navbar navbar-expand-lg navbar-light">
    //         <a className="navbar-brand" href="/">

    //           <figure className="mb-0">
    //             <img src={l.logo} alt="logo-icon" width={290} />
    //           </figure>
    //         </a>
    //         <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon" />
    //           <span className="navbar-toggler-icon" />
    //           <span className="navbar-toggler-icon" />
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav ml-auto">
    //             <li className="nav-item active">
    //               <a className="nav-link " href="/">HOME</a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link p-0" href="#about-sec">ABOUT US</a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link p-0" href="#services-sec">SERVICES</a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link p-0" href="#pricing-sec">PRICING</a>
    //             </li>

    //             <li className="nav-item contact-btn">


    //               <div className="nav-item contact-btn d-flex align-items-center">
    // {user?.email ? (
    //   <li className="nav-item m-2">
    //     <Link to="/dashboard" className="nav-link p-0">Dashboard</Link>
    //   </li>
    // ) : (
    //   <li className="nav-item m-2">
    //     <Link to="/login" className="nav-link p-0">Log in</Link>
    //   </li>
    // )}

    // {users.map((u, index) => (
    //   u.userEmail === user?.email && u.userRole === 'Admin' && (
    //     <li className="nav-item m-2" key={index}>
    //       <Link to="/admin" className="nav-link p-0">Admin</Link>
    //     </li>
    //   )
    // ))}
    //               </div>

    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //       {/* container */}
    //     </div>
    //     {/* header-con */}
    //   </header> )
    // }


    // </>

    <>

<div>
  {/* start: Back To Top */}
  <div className="progress-wrap" id="scrollUp">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* end: Back To Top */}
  {/* HEADER START */}
  <header className="tj-header-area header-absolute">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center">
          <div className="logo-box">
            <a href="/">
              <img src="https://i.ibb.co/HY0hrrp/R.png" alt />
            </a>
          </div>
          <div className="header-info-list d-none d-md-inline-block">
            <ul className="ul-reset">
            <li><a href="mailto:contact.rijonislam@gmail.com">contact.rijonislam@gmail.com
            </a></li>
            </ul>
          </div>
          <div className="header-menu" id="headerMenu">
            <nav>
              <ul>
                <li className=" current-menu-ancestor">
                  <a className="current-menu-item" href="/">Home</a>
                </li>
                <li><a href="#about-sec">About</a></li>
                <li><a href="#services-sec">Services</a></li>
                
                <li><a href="#skill-sec">My Skill</a></li>
                <li><a href="#contact-sec">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu d-lg-none" />
          <div className="header-button">
          <a href="https://www.fiverr.com/miss_reshma" class="btn tj-btn-primary" target="_blank">Hire me!</a>
          </div>
          <div className="menu-bar d-lg-none">
            <button>
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header className="tj-header-area header-2 header-sticky sticky-out">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center">
          <div className="logo-box">
            <a href="/">
              <img src="https://i.ibb.co/HY0hrrp/R.png" alt />
            </a>
          </div>
          <div className="header-info-list d-none d-md-inline-block">
            <ul className="ul-reset">
              <li><a href="mailto:contact.rijonislam@gmail.com">contact.rijonislam@gmail.com</a></li>
            </ul>
          </div>
          <div className="header-menu">
            <nav>
              <ul>
                <li className=" current-menu-ancestor">
                  <a className="current-menu-item" href="/">Home</a>
                  
                </li>
                <li><a href="#about-sec">About</a></li>
                <li><a href="#services-sec">Services</a></li>
               
                <li><a href="#skill-sec">My Skill</a></li>
                <li><a href="#contact-sec">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu d-lg-none" />
          <div className="header-button">
            <a href="#" className="btn tj-btn-primary">Hire me!</a>
          </div>
          <div className="menu-bar d-lg-none">
            <button>
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

    </>
  );
};

export default NavBar;
