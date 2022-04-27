import Image from "next/image";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

SwiperCore.use([Navigation]);

const TechnologiesUsed = ({ technologies }) => {
  const [heading, setHeading] = useState();

  const getHeadings = async () => {
    const res = await fetch("https://cgsapi.herokuapp.com/api/homes");
    const headings = await res.json();
    setHeading(headings.data[0]);
  };

  useEffect(() => {
    getHeadings();
  }, []);
  return (
    <section id="use">
      <div className="container">
        <div className="use-wrapper">
          <div className="use-heading">
            <div className="use-heading-left">
              <h2> {heading?.attributes.technology_title}</h2>
              <p>
                <ReactMarkdown>
                  {heading?.attributes.technology_description}
                </ReactMarkdown>
                {/* <ReactMarkdown
                  children={heading?.attributes.technology_description}
                /> */}
              </p>
            </div>
            <div className="use-heading-right d-none d-lg-flex">
              <div className="use-heading-right-one">
                <div id="counter" className="slider-counter"></div>
              </div>
              <div className="use-heading-nav">
                <span id="left" className="sleft custom_prev_br1">
                  <img src="/img/sleft.png" alt="images not found" />
                </span>
                <span id="right" className="sright   custom_next_br1">
                  <img src="/img/sright.png" alt="images not found" />
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="mySwiperLappy mt-5">
              <Swiper
                slidesPerView={6}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: ".custom_next_br1",
                  nextEl: ".custom_prev_br1",
                }}
                className=""
                style={{
                  display: "flex",
                }}
              >
                {technologies.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div className="sm-slide-content myHover  ">
                        <a href="#">
                          <div
                            className="tech text-center"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              className="mb-4"
                              style={{
                                fontSize: "19px",
                                color: "black",
                                fontWeight: "500",
                              }}
                            >
                              {item.name}
                            </div>
                            <img
                              className="mb-5"
                              src={item.tech_image}
                              alt="images not found"
                              width={66}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mySwiperMobile mt-5">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: ".custom_prev_br1",
                  nextEl: ".custom_next_br1",
                }}
                className=""
                style={{
                  display: "flex",
                }}
              >
                {technologies.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div className="sm-slide-content ">
                        <a href="#">
                          <div
                            className="tech text-center"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              className="mb-4"
                              style={{
                                fontSize: "19px",
                                color: "black",
                                fontWeight: "500",
                              }}
                            >
                              {item.name}
                            </div>
                            <img
                              className="mb-5"
                              src={item.tech_image}
                              alt="images not found"
                              width={66}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec1.png" alt="images not found" />
                              <span>React</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec2.png" alt="images not found" />
                              <span>Vue</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec3.png" alt="images not found" />
                              <span>HTML</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec4.png" alt="images not found" />
                              <span>CSS</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec5.png" alt="images not found" />
                              <span>JavaScript</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sm-slide-content">
                          <a href="#">
                            <div className="techone text-center">
                              <img src="/img/tec6.png" alt="images not found" />
                              <span>WordPress</span>
                            </div>
                          </a>
                        </div>
                      </div> */}
          </div>
          <div className="use-slider flex">
            <div className="use-heading-right-one text-center d-block d-lg-none">
              <div id="counter" className="slider-counter"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media only screen and (min-width: 800px) {
            .mySwiperMobile {
              display: none;
            }
          }

          @media only screen and (max-width: 800px) {
            .mySwiperLappy {
              display: none;
            }
          }
          .myHover:hover{
            border: 1px solid #dee2e6;
          }
          .techone text-center:hover{
            border:none
          }
          .sm-slide-content:hover{
            border: 1px solid #dee2e6
          .tech_images{
            width:50px;
            height:50px;
          }
        `}
      </style>
    </section>
  );
};

export default TechnologiesUsed;
