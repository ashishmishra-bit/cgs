import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ReactMarkdown from "react-markdown";

const Servicearea = ({ services, fullData }) => {
  return (
    <div>
      <section id="service">
        <div className="container">
          <div className="service-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="service-left">
                  <div className="service-left-heading">
                    <h2>{fullData.data[0].attributes.service_title}</h2>
                    <p>
                      <ReactMarkdown>
                        {fullData.data[0].attributes.service_description}
                      </ReactMarkdown>
                    </p>
                  </div>
                  <div className="service-left-wrapper pr-2">
                    {services.map((service, index) => {
                      if (index % 2 == 0) {
                        return (
                          <div
                            className="service-left-one wow slideInUp"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <div className="service-left-one-img">
                              <img
                                src={service.images}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <h4>{service.service_title}</h4>
                              <p>
                                <ReactMarkdown>
                                  {service.service_description}
                                </ReactMarkdown>
                              </p>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {/* <div className="service-left-one wow slideInUp">
                      <div className="service-left-one-img">
                        <img src="/img/sv1.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <h4>Consulting</h4>
                        <p>
                          Finding suitable tech solutions. <br />
                          Ddvising at crucial friction points, implementing
                          solutions <br /> managing interactions between
                          different suppliers.
                        </p>
                      </div>
                    </div>
                    <div className="service-left-one wow slideInUp">
                      <div className="service-left-one-img">
                        <img src="/img/sv2.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <h4>Development</h4>
                        <p>
                          Gathering requirements and clients needs. <br />
                          Creating a specification document that describes the
                          solution.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-right">
                  <div className="service-left-wrapper pl-2">
                    {services.map((service, index) => {
                      if (index % 2 != 0) {
                        return (
                          <div
                            className="service-left-one wow slideInUp mt-0"
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <div className="service-left-one-img">
                              <img
                                src={service.images}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <h4>{service.service_title}</h4>
                              <p>
                                <ReactMarkdown>
                                  {service.service_description}
                                </ReactMarkdown>
                              </p>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {/* <div className="service-left-one wow slideInUp mt-0">
                      <div className="service-left-one-img">
                        <img src="/img/sv3.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <h4>Characterization & Specification</h4>
                        <p>
                          Gathering requirements and clients needs. <br />
                          Creating a specification document that describes the
                          solution.
                        </p>
                      </div>
                    </div>
                    <div className="service-left-one wow slideInUp">
                      <div className="service-left-one-img">
                        <img src="/img/sv4.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <h4>Hybrid apps</h4>
                        <p>
                          Finding suitable tech solutions. <br />
                          Ddvising at crucial friction points, implementing
                          solutions <br /> managing interactions between
                          different suppliers.
                        </p>
                      </div>
                    </div> */}
                    <div className="service-learn text-right">
                      <Link href="/services">
                        <a>
                          Learn more about services{" "}
                          <span className="d-none d-lg-inline-block">
                            we provide
                          </span>{" "}
                          <img src="/img/arr1.png" />{" "}
                        </a>
                      </Link>
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

export default Servicearea;
