import React from "react";

const Technologyhero = ({ data }) => {
  return (
    <div>
      <section id="hero" className="service-hero techhero mt-5">
        <div className="container">
          <div className="hero-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="hero-left">
                  <h2>{data.hero_heading}<span>{data.heading_blue}</span></h2>
                  <p>{data.hero_desc}</p>
                  <div className="sm-graph d-block d-md-none">
                    <div className="row">
                      <div className="col-4">
                        <div className="sm-graph-wrapper">
                          <ul>
                            <li>
                              <span></span>Angular
                            </li>
                            <li>
                              <span></span>Vue
                            </li>
                            <li>
                              <span></span>JavaScript
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="sm-graph-wrapper">
                          <ul>
                            <li>
                              <span></span>CSS
                            </li>
                            <li>
                              <span></span>HTML
                            </li>
                            <li>
                              <span></span>NodeJS
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="sm-graph-wrapper">
                          <ul>
                            <li>
                              <span></span>Ionic
                            </li>
                            <li>
                              <span></span>PHP
                            </li>
                            <li>
                              <span></span>Squidex
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm-hero-link hero-left">
                    <a href="#" style={{
                    color:"white"
                  }}>
                      Show cases{" "}
                      <span>
                        <img src="/img/right.svg" alt="images not found" />
                      </span>
                    </a>
                  </div>
                  <div className="hero-scroll herotwoscrell d-none d-lg-block">
                    <span onMouseOver={()=>{
                    window.scroll(0,750)
                  }}>
                      <img src="/img/scroll.png" alt="" /> Scroll down
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="hero-right d-none d-lg-block ml-0">
                  <div className="p3tech-hero-content">
                    <img src={data.hero_image} alt="images not found" />
                    {/* <ul>
                              <li>Angular <span></span> </li>
                              <li>Vue <span></span> </li>
                              <li>JavaScript <span></span> </li>
                              <li>HTML <span></span> </li>
                              <li> <span></span> CSS </li>
                              <li><span></span>  NodeJS </li>
                              <li><span></span> PHP </li>
                              <li><span></span>  Squidex </li>
                           </ul> */}
                  </div>
                </div>
                <div className="sm-graph d-none d-md-block d-lg-none">
                  <div className="row">
                    <div className="col-4">
                      <div className="sm-graph-wrapper">
                        <ul>
                          <li>
                            <span></span>Angular
                          </li>
                          <li>
                            <span></span>Vue
                          </li>
                          <li>
                            <span></span>JavaScript
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="sm-graph-wrapper">
                        <ul>
                          <li>
                            <span></span>CSS
                          </li>
                          <li>
                            <span></span>HTML
                          </li>
                          <li>
                            <span></span>NodeJS
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="sm-graph-wrapper">
                        <ul>
                          <li>
                            <span></span>Ionic
                          </li>
                          <li>
                            <span></span>PHP
                          </li>
                          <li>
                            <span></span>Squidex
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologyhero;
