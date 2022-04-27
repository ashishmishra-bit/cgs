import Link from "next/link";
import React from "react";
import Contact from "./Contact";
import ReactMarkdown from "react-markdown";

const Hero = ({ data }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <div>
      <section id="hero">
        <div className="container mt-5">
          <div className="hero-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="hero-left">
                  <h2>
                    {data.home_heading}
                    <span>{data.heading_blue}</span>
                  </h2>
                  <p>
                    <ReactMarkdown>{data.home_description}</ReactMarkdown>
                    {/* <ReactMarkdown children={data.home_description} /> */}
                  </p>
                  <img
                    className="d-block d-md-none"
                    src={data.home_banner}
                    alt="images not found"
                  />
                  <a
                    onClick={() => {
                      setActiveItem(1);
                    }}
                    style={{
                      color: "white",
                    }}
                  >
                    Start A project now
                    <span>
                      <img src="/img/right.svg" alt="images not found" />
                    </span>
                  </a>
                  <div className="hero-social">
                    <ul>
                      <li>
                        <Link href={data.linkedin_link}>
                          <a>
                            <img src="/img/link1.png" alt="" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={data.linkedin_link}>
                          <a>
                            <img src="/img/link2.png" alt="" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                    src={data.home_banner}
                    alt="images not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {activeItem ? <Contact setActiveItem={setActiveItem} /> : null}

      <style jsx>
        {`
          .projectStart:hover p {
            color: "red";
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
