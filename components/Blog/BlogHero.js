import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogHero = ({ data, fullData }) => {
  const [email, setEmail] = React.useState("");
  const [isSubs, setIsSubs] = React.useState(0);
  const [isAlert, setIsAlert] = React.useState(0);

  const subscribeHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
    };
    const response = await fetch("https://cgsapi.herokuapp.com/api/forms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    if (response) {
      setIsSubs(1);
      setEmail("");
      setIsAlert(1);
      setTimeout(() => {
        setIsAlert(0);
      }, 5000);
    }
  };
  console.log(fullData);
  return (
    <section id="bloghero">
      <div className="container mt-5">
        <div className="bloghero-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="bloghero-left">
                <h2>
                  {data.blog_hero_heading} <br />
                  <span>{data.heading_blue}</span>
                </h2>

                <p>
                  <ReactMarkdown>{data.blog_hero_desc}</ReactMarkdown>
                </p>
                <img
                  className="d-block d-md-none"
                  src="/img/blog.png"
                  alt="images not found"
                />
                <div className="bloghero-left-mail">
                  <form onSubmit={subscribeHandler}>
                    <div className="bloghero-left-mail-wrapper">
                      <input
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        required
                        placeholder="Please, enter your email"
                      />
                      <button type="submit">
                        {" "}
                        {isSubs ? "Subscribed" : "Subscribe"}{" "}
                        <span>
                          <img src="/img/right.svg" alt="images not found" />
                        </span>{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="bloghero-right">
                <img
                  className="d-none d-md-block"
                  src="/img/blog.png"
                  alt="images not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blogscroll area start --> */}
      <section id="blogscroll">
        <div className="container">
          <div className="blogscroll-wrapper">
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
      </section>

      {/* Alert Area */}
      {isAlert ? (
        <div className="alert alert-success myAlert" role="alert">
          You have been Subscribed!
        </div>
      ) : null}

      <style jsx>
        {`
          .myAlert {
            position: fixed;
            top: 100px;
            right: 5px;
            width: 300px;
            z-index: 9999;
          }
        `}
      </style>
    </section>
  );
};

export default BlogHero;
