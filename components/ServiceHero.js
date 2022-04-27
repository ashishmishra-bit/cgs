import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

const ServiceHero = ({ service_card, data }) => {
  return (
    <div>
      <section id="hero" className="service-hero mt-5">
        <div className="container">
          <div className="hero-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="hero-left">
                  <h2>
                    {data.hero_title}
                    <span> {data.heading_blue}</span>
                  </h2>
                  <p>
                    {" "}
                    <ReactMarkdown>{data.hero_description}</ReactMarkdown>
                    {/* <ReactMarkdown children={data.hero_description} /> */}
                  </p>

                  <div className="sm-hero-link hero-left d-none d-md-block">
                    <a
                      href="#"
                      style={{
                        color: "white",
                      }}
                    >
                      Learn services{" "}
                      <span>
                        <img src="/img/right.svg" alt="images not found" />
                      </span>
                    </a>
                  </div>
                  <div className="hero-scroll herotwoscrell d-none d-lg-block">
                    <span
                      onMouseOver={() => {
                        window.scroll(0, 750);
                      }}
                    >
                      <img src="/img/scroll.png" alt="" /> Scroll down
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="hero-right">
                  <div className="hero-right-content">
                    {service_card.slice(0, 4).map((data, index) => {
                      if (index % 2 == 0) {
                        return (
                          <div className="hero-right-content-one " key={index}>
                            <Link href={`#service${index}`}>
                              <a>
                                <div className="hero-rco-left">
                                  <div className="hero-rco-left-one">
                                    <img
                                      src="/img/r1.png"
                                      alt="images not found"
                                    />
                                  </div>
                                  <div className="hero-rco-left-two">
                                    <h5>{data.service_title}</h5>
                                    <p>
                                      {data?.service_description?.substring(
                                        0,
                                        50
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="hero-rco-right">
                                  <span>
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g opacity="0.3">
                                        <path
                                          d="M9 18L15 12L9 6"
                                          stroke="#001633"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="hero-right-content-one hero-right-content-two"
                            key={index}
                          >
                            <Link href={`#service${index}`}>
                              <a>
                                <div className="hero-rco-left">
                                  <div className="hero-rco-left-one">
                                    <img
                                      src="/img/r2.png"
                                      alt="images not found"
                                    />
                                  </div>
                                  <div className="hero-rco-left-two">
                                    <h5>{data.service_title}</h5>
                                    <p>
                                      {data.service_description.substring(
                                        0,
                                        50
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="hero-rco-right">
                                  <span>
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g opacity="0.3">
                                        <path
                                          d="M9 18L15 12L9 6"
                                          stroke="#001633"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      }
                    })}
                    {/* <div className="hero-right-content-one ">
                                <a href="#">
                                    <div className="hero-rco-left">
                                        <div className="hero-rco-left-one">
                                            <img src="/img/r1.png" alt="images not found"/>
                                        </div>
                                        <div className="hero-rco-left-two">
                                            <h5>Web Development</h5>
                                            <p>Gathering requirements and clients needs.</p>
                                        </div>
                                    </div>
                                    <div className="hero-rco-right">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                            <path d="M9 18L15 12L9 6" stroke="#001633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            </svg>
                                            </span>
                                    </div>
                                </a>
                            </div>
                            <div className="hero-right-content-one hero-right-content-two">
                                <a href="#">
                                    <div className="hero-rco-left">
                                        <div className="hero-rco-left-one">
                                            <img src="/img/r2.png" alt="images not found"/>
                                        </div>
                                        <div className="hero-rco-left-two">
                                            <h5>Hybrid apps</h5>
                                            <p>Advising at crucial friction points</p>
                                        </div>
                                    </div>
                                    <div className="hero-rco-right">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                            <path d="M9 18L15 12L9 6" stroke="#001633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            </svg>
                                            </span>
                                    </div>
                                </a>
                            </div>
                            <div className="hero-right-content-one ">
                                <a href="#">
                                    <div className="hero-rco-left">
                                        <div className="hero-rco-left-one">
                                            <img src="/img/r3.png" alt="images not found"/>
                                        </div>
                                        <div className="hero-rco-left-two">
                                            <h5>Consulting</h5>
                                            <p>Finding suitable tech solutions.</p>
                                        </div>
                                    </div>
                                    <div className="hero-rco-right">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                            <path d="M9 18L15 12L9 6" stroke="#001633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            </svg>
                                            </span>
                                    </div>
                                </a>
                            </div>
                            <div className="hero-right-content-one hero-right-content-two">
                                <a href="#">
                                    <div className="hero-rco-left">
                                        <div className="hero-rco-left-one">
                                            <img src="/img/r4.png" alt="images not found"/>
                                        </div>
                                        <div className="hero-rco-left-two">
                                            <h5>Characterization & Specification</h5>
                                            <p>Gathering requirements and clients needs</p>
                                        </div>
                                    </div>
                                    <div className="hero-rco-right">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                            <path d="M9 18L15 12L9 6" stroke="#001633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            </svg>
                                            </span>
                                    </div>
                                </a>
                            </div> */}

                    <div className="sm-hero-link hero-left d-block d-md-none">
                      <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                      >
                        Learn services{" "}
                        <span>
                          <img src="/img/right.svg" alt="images not found" />
                        </span>
                      </a>
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

export default ServiceHero;
