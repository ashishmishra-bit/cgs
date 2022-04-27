import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

SwiperCore.use([Navigation]);

const Testinomials = ({ testimonials }) => {
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
    <section id="use" className="client">
      <div className="container">
        <div className="use-wrapper client-wrapper">
          <div className="use-heading">
            <div className="use-heading-left">
              <h2>{heading?.attributes.what_our_client_say_tittle}</h2>
              <p>
                <ReactMarkdown>
                  {heading?.attributes.what_our_client_say_description}
                </ReactMarkdown>
              </p>
            </div>
            <div className="use-heading-right d-none d-lg-flex">
              <div className="use-heading-right-one">
                <div className="clientcounter" id="counter"></div>
              </div>
              <div className="use-heading-nav">
                <span id="left" className="cleft custom_prev_br1">
                  <img src="/img/sleft.png" alt="images not found" />
                </span>
                <span id="right" className="cright custom_next_br1">
                  <img src="/img/sright.png" alt="images not found" />
                </span>
              </div>
            </div>
          </div>
          <div className="use-slider clislider">
            <div className=" client-slider mySwiperLappy">
              <Swiper
                slidesPerView={3}
                spaceBetween={15}
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
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="item overflow-hidden">
                      <div className="clif-one-wrapper">
                        <div className="clif-one overflow-hidden">
                          <p>{item?.content?.substring(0, 95)}</p>
                          <div className="clif-one-block">
                            <div className="clif-one-left">
                              <div className="clif-one-left-one">
                                {item?.image && (
                                  <img
                                    src={item.image}
                                    alt="images not found"
                                  />
                                )}
                              </div>
                              <div className="clif-one-left-two">
                                <h6>{item.name}</h6>
                                <p>{item.designation}</p>
                              </div>
                            </div>
                            <div className="clif-one-right">
                              <img src="/img/quo.png" alt="images not found" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="item">
                      <div className="clif-one-wrapper">
                            <div className="clif-one">
                                <p>"It has been a pleasure to work with such a steady, supportive and flexible development partner."</p>
                                <div className="clif-one-block">
                                    <div className="clif-one-left">
                                        <div className="clif-one-left-one">
                                            <img src="/img/cl1.png" alt="images not found"/>
                                        </div>
                                        <div className="clif-one-left-two">
                                            <h6>Kieran Robbins</h6>
                                            <p>CEO,PT. Name Of COmoany</p>
                                        </div>
                                    </div>
                                    <div className="clif-one-right">
                                        <img src="/img/quo.png" alt="images not found"/>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>							
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"Satisfied the requirements by writing clean, usable code and providing a comprehensive service. They met if not outpaced deadlines, ultimately delivering the project a couple of weeks early. The professional team excelled at project management."</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl2.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>	
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>	
                     <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>					 							 							 */}
            </div>
            <div className=" client-slider mySwiperMobile">
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
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
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="item overflow-hidden">
                      <div className="clif-one-wrapper">
                        <div className="clif-one overflow-hidden">
                          <p>{item?.content?.substring(0, 95)}</p>
                          <div className="clif-one-block">
                            <div className="clif-one-left">
                              <div className="clif-one-left-one">
                                {item?.image && (
                                  <img
                                    src={item.image}
                                    alt="images not found"
                                  />
                                )}
                              </div>
                              <div className="clif-one-left-two">
                                <h6>{item.name}</h6>
                                <p>{item.designation}</p>
                              </div>
                            </div>
                            <div className="clif-one-right">
                              <img src="/img/quo.png" alt="images not found" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="item">
                      <div className="clif-one-wrapper">
                            <div className="clif-one">
                                <p>"It has been a pleasure to work with such a steady, supportive and flexible development partner."</p>
                                <div className="clif-one-block">
                                    <div className="clif-one-left">
                                        <div className="clif-one-left-one">
                                            <img src="/img/cl1.png" alt="images not found"/>
                                        </div>
                                        <div className="clif-one-left-two">
                                            <h6>Kieran Robbins</h6>
                                            <p>CEO,PT. Name Of COmoany</p>
                                        </div>
                                    </div>
                                    <div className="clif-one-right">
                                        <img src="/img/quo.png" alt="images not found"/>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>							
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"Satisfied the requirements by writing clean, usable code and providing a comprehensive service. They met if not outpaced deadlines, ultimately delivering the project a couple of weeks early. The professional team excelled at project management."</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl2.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>	
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>	
                     <div className="item">
                        <div className="clif-one-wrapper">
                             <div className="clif-one">
                                 <p>"They've been very communicative, holding biweekly meetings and communicating consistently via Slack. Their coding skills and punctuality are commendable.</p>
                                 <div className="clif-one-block">
                                     <div className="clif-one-left">
                                         <div className="clif-one-left-one">
                                             <img src="/img/cl3.png" alt="images not found"/>
                                         </div>
                                         <div className="clif-one-left-two">
                                             <h6>Marilyn Walls</h6>
                                             <p>CTO, Name Of COmoany</p>
                                         </div>
                                     </div>
                                     <div className="clif-one-right">
                                         <img src="/img/quo.png" alt="images not found"/>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>					 							 							 */}
            </div>
            <div className="use-heading-right-one d-block d-lg-none text-center">
              <div className="clientcounter" id="counter"></div>
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
        `}
      </style>
    </section>
  );
};

export default Testinomials;
