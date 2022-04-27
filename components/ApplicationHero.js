import Link from "next/link";
import React from "react";

const ApplicationHero = ({ data }) => {
  return (
    <div>
      <section id="hero" className="app">
        <div className="container-fluid">
          <div className="hero-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="hero-left">
                  <div className="app-left-back d-none d-lg-block">
                    <Link href="/technology">
                      <a>
                        {" "}
                        <img
                          src="/img/aleft.png"
                          alt="images not found"
                        /> Back{" "}
                      </a>
                    </Link>
                  </div>
                  <h2>{data?.project_title}</h2>
                  <p>
                    Finding suitable <strong>tech solutions.</strong> <br />
                    Ddvising at crucial friction points, implementing solutions.
                  </p>
                  <img
                    className="d-block d-md-none"
                    src={data?.project_image}
                    alt="images not found"
                  />
                  <a href="#">
                    View more{" "}
                    <span>
                      <img src="/img/right.svg" alt="images not found" />
                    </span>
                  </a>
                  <div className="hero-scroll d-none d-lg-block">
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
                  <img
                    className="d-none d-md-block"
                    src={data?.project_image}
                    alt="images not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationHero;
