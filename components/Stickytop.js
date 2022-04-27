import React from "react";

const Stickytop = () => {
  return (
    <div>
      <header className="sticky-top bg-white">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="index.html">
                  <img
                    id="scrolllo"
                    src="/img/logo.png"
                    alt="images not found"
                  />
                  <img id="smllo" src="/img/smlogo.png" alt="images not found" />
                </a>
              </div>
              <div className="bar d-block d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="header-right">
              <div className="header-right-one">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a className="active" href="/technology">
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                </ul>
              </div>
              <div className="header-right-two">
                <ul>
                  <li>
                    <a className="active" href="#">
                      En
                    </a>
                  </li>
                  <li>
                      
                    <a href="#">Heb</a>
                  </li>
                  <li>
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      href="javascript:void(0);"
                    >
                      Contact Us{" "}
                      <img src="/img/arr.png" alt="images not found" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Stickytop;
