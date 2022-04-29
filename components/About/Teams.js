import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

SwiperCore.use([Navigation]);

const Teams = ({ teams, fullData }) => {
  console.log(teams);
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
                  slidesPerView={3}
                  spaceBetween={35}
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
                                    <div className="slide-one-content">
                                      <div className="slide-one-left">
                                        <img
                                          src={
                                            team.photo
                                              ? `${team.photo}`
                                              : `https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png`
                                          }
                                          alt="images not found"
                                        />
                                      </div>
                                      <div className="slide-one-right">
                                        <div className="slide-one-heading">
                                          <div className="slide-one-heading-left">
                                            <h5>{team.name}</h5>
                                            <p>{team.designation}</p>
                                          </div>
                                          <div className="slide-one-heading-right">
                                            <ul>
                                              {team.linkedIN ? (
                                                <>
                                                  <li>
                                                    <a href={team.linkedIN}>
                                                      <span>
                                                        <FaLinkedinIn className="fa-brands fa-linkedin"></FaLinkedinIn>
                                                      </span>
                                                    </a>
                                                  </li>
                                                </>
                                              ) : (
                                                <></>
                                              )}

                                              {team.github ? (
                                                <>
                                                  <li>
                                                    <a href={team.github}>
                                                      <span>
                                                        <FaGithub className="fa-brands fa-github"></FaGithub>
                                                      </span>
                                                    </a>
                                                  </li>
                                                </>
                                              ) : (
                                                <></>
                                              )}

                                              {team.twitter ? (
                                                <>
                                                  <li>
                                                    <a href={team.twitter}>
                                                      <span>
                                                        <FaTwitter className="fa-brands fa-twitter"></FaTwitter>
                                                      </span>
                                                    </a>
                                                  </li>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="slide-one-text">
                                          <p>{team.content}</p>
                                        </div>
                                      </div>

                            </div>
                          </SwiperSlide>
                        ))}

                </Swiper>
              </div>
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
