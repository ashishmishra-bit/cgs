import React from "react";
import SwiperCore, { Navigation , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const Teams = ({ teams }) => {
  return (
    <section id="use">
      <div className="container">
        <div className="use-wrapper">
          <div className="use-heading">
            <div className="use-heading-left">
              <h2>Our Teams</h2>
            </div>
            <div className="use-heading-right d-none d-lg-flex">
              <div className="use-heading-right-one">
                <div id="counter" className="team-counter"></div>
              </div>
              <div className="use-heading-nav">
                <span id="left" className="tleft custom_prev_br1">
                  <img src="/img/sleft.png" alt="images not found" />
                </span>
                <span id="right" className="tright custom_next_br1">
                  <img src="/img/sright.png" alt="images not found" />
                </span>
              </div>
            </div>
          </div>

          <div className="use-slider container">
            <div className="teamslider use-wrapper ">
              <div className="flex">
                <Swiper
                   modules={[Navigation, Pagination]}
                  slidesPerView={1}
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
                  {teams.map((team, index) => (
                    <SwiperSlide key={index}>
                      <div className="item ">
                        <div className="slide-one-content">
                          <div className="slide-one-left">
                            <img src={team.photo} alt="images not found" />
                          </div>
                          <div className="slide-one-right">
                            <div className="slide-one-heading">
                              <div className="slide-one-heading-left">
                                <h5>{team.name}</h5>
                                <p>{team.designation}</p>
                              </div>
                              <div className="slide-one-heading-right">
                                <ul>
                                  <li>
                                    <a
                                      href={team.github}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <span>
                                        <i className="fa-brands fa-github"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href={team.twitter}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <span>
                                        <i className="fa-brands fa-twitter"></i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="slide-one-text">
                              <p>
                                Since 2005 she worked in several areas on the
                                software industry including web design front-end
                                development quality assurance and requirements
                                analysis always thinking on the users and
                                bringing User Experience (UX) approaches to her
                                projects.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <div className="item">
                <div className="slide-one">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta1.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Shlomo Kalichman</h5>
                              <p>CEO of Cgspark</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Technical lead with rich experience in recruiting
                              and setting up dev teams Worked in Agile
                              methodology and developed using Javascript (JS)
                              AngularJS while using GIT and NodeJS. <br /> Tech
                              knowledge – HTML CSS Javascript (OOP) JQuery GIT
                              JIRA Agile SVN
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta2.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Cindy Patrick</h5>
                              <p>Web Technologies</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Since 2005 she worked in several areas on the
                              software industry including web design front-end
                              development quality assurance and requirements
                              analysis always thinking on the users and bringing
                              User Experience (UX) approaches to her projects.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta3.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Shannon Cannon</h5>
                              <p>Angular Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics for a fast-growing consumer
                              goods company
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta4.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Darrel Duncan</h5>
                              <p>JavaScript Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics for a fast-growing consumer
                              goods company
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta5.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Leah Mack</h5>
                              <p>JWeb Technologies</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Since 2005 she worked in several areas on the
                              software industry including web design front-end
                              development quality assurance and requirements
                              analysis always thinking on the users and bringing
                              User Experience (UX) approaches to her projects.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta6.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Kelvin Clarke</h5>
                              <p>Angular Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics fora fast-growing consumer
                              goods company.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="slide-one">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta1.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Shlomo Kalichman</h5>
                              <p>CEO of Cgspark</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Technical lead with rich experience in recruiting
                              and setting up dev teams Worked in Agile
                              methodology and developed using Javascript (JS)
                              AngularJS while using GIT and NodeJS. <br /> Tech
                              knowledge – HTML CSS Javascript (OOP) JQuery GIT
                              JIRA Agile SVN
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta2.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Cindy Patrick</h5>
                              <p>Web Technologies</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Since 2005 she worked in several areas on the
                              software industry including web design front-end
                              development quality assurance and requirements
                              analysis always thinking on the users and bringing
                              User Experience (UX) approaches to her projects.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta3.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Shannon Cannon</h5>
                              <p>Angular Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics for a fast-growing consumer
                              goods company
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta4.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Darrel Duncan</h5>
                              <p>JavaScript Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics for a fast-growing consumer
                              goods company
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta5.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Leah Mack</h5>
                              <p>JWeb Technologies</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Since 2005 she worked in several areas on the
                              software industry including web design front-end
                              development quality assurance and requirements
                              analysis always thinking on the users and bringing
                              User Experience (UX) approaches to her projects.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="slide-one-content">
                        <div className="slide-one-left">
                          <img src="/img/ta6.png" alt="images not found" />
                        </div>
                        <div className="slide-one-right">
                          <div className="slide-one-heading">
                            <div className="slide-one-heading-left">
                              <h5>Kelvin Clarke</h5>
                              <p>Angular Developer</p>
                            </div>
                            <div className="slide-one-heading-right">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-github"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>
                                      <i className="fa-brands fa-twitter"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-one-text">
                            <p>
                              Kelvin is self-confessed tinkerer creator and
                              passionate problem-solver. Hes currently working
                              on internal applications in quality management and
                              business analytics fora fast-growing consumer
                              goods company.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="use-heading-right-one text-center d-block d-lg-none">
              <div id="counter" className="slider-counter"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .myItems {
            display: flex;
            width: 100%;
          }
        `}
      </style>
    </section>
  );
};

export default Teams;
