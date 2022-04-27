import React from "react";
import ReactMarkdown from "react-markdown";

const AboutHero = ({ data, fullData }) => {
  console.log(fullData);
  return (
    <section id="about-hero">
      <div className="container mt-5">
        <div className="about-hero-wrapper text-center">
          <h2>
            {fullData?.data[0]?.attributes.hero_heading}
            <br />{" "}
            <span style={{ color: "blue" }}>
              {fullData?.data[0]?.attributes.heading_blue}
            </span>
          </h2>
          {/* <span>Cognitive Spark</span> */}
          {/* <p dangerouslySetInnerHTML={{ __html: data.about_description }} /> */}
          <p>
            <ReactMarkdown>
              {fullData?.data[0]?.attributes.hero_short_description}
            </ReactMarkdown>
          </p>
          <div className="about-contact">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="about-contact-left">
                  <a href="tel:+97254-652-2627">
                    <div className="about-contact-left-one">
                      <img src="/img/ph.svg" alt="images not found" />
                    </div>
                    <div className="about-contact-right-one">
                      <span>Phone:</span>
                      <p>{data.phone_number}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-contact-left">
                  <a href="mailto:Cognitive.Spark@gmail.com">
                    <div className="about-contact-left-one">
                      <img src="/img/em.svg" alt="images not found" />
                    </div>
                    <div className="about-contact-right-one">
                      <span>Our Email:</span>
                      <p>{data.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-hero-block">
          <img src="/img/iconx.png" alt="images not found" />
          <h3>
            Give your business a chance of accepting new <br /> opportunities
            with us!{" "}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
