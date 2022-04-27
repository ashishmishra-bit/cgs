import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Servicep2Help = ({ service_card, title, desc, fullData }) => {
  return (
    <div>
      <section id="p2help ">
        <div className="container mb-5">
          <div className="p2help-wrapper">
            <div className="p2help-heading">
              <h2>{title}</h2>
              <p>
                <ReactMarkdown>{desc}</ReactMarkdown>
              </p>
            </div>

            {service_card.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <div
                    className="p2help-block-one"
                    key={index}
                    id={`service${index}`}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-left">
                          <img src={item.images} alt="images not found" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-right">
                          <div className="p2help-block-one-heading">
                            <h4>{item.service_title}</h4>
                            <p>
                              <ReactMarkdown>
                                {item?.service_description}
                              </ReactMarkdown>
                              {/* <ReactMarkdown
                                children={item?.service_description}
                              /> */}
                            </p>
                          </div>
                          <div className="p2help-block-one-list">
                            <ul>
                              {item.key.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <ReactMarkdown>
                                      {item.key_points}
                                    </ReactMarkdown>
                                    {/* <span></span> {item.key_points}{" "} */}
                                  </li>
                                );
                              })}
                              {/* <li><span></span> Undertaking short-term or long-term projects to address a variety of issues  and needs </li>
                                        <li><span></span> Meeting with management or appropriate staff to understand their   requirements </li>
                                        <li><span></span> Using interviews, surveys etc. to collect necessary data </li> */}
                            </ul>
                            <a href="#">
                              Start now <img src="/img/arr1.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="p2help-block-one"
                    id={`service${index}`}
                    key={index}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-2 order-md-1 col-md-6">
                        <div className="p2help-block-one-right">
                          <div className="p2help-block-one-heading">
                            <h4>{item.service_title}</h4>

                            <p>
                              <ReactMarkdown>
                                {item.service_description}
                              </ReactMarkdown>
                            </p>
                          </div>
                          <div className="p2help-block-one-list">
                            <ul>
                              {item.key.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <ReactMarkdown>
                                      {item.key_points}
                                    </ReactMarkdown>
                                    {/* <span></span> {item.key_points}{" "} */}
                                  </li>
                                );
                              })}
                            </ul>
                            <a href="#">
                              Start now <img src="/img/arr1.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-md-2 col-md-6">
                        <div className="p2help-block-one-left">
                          <img src={item.images} alt="images not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            {/* <div className="p2help-block-one">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-left">
                            <img src="/img/pi1.png" alt="images not found"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-right">
                            <div className="p2help-block-one-heading">
                                <h4>Development</h4>
                                <p>Gathering requirements and clients needs.  Creating a specification document that describes the solution.</p>
                            </div>
                            <div className="p2help-block-one-list">
                                <ul>
                                    <li><span></span> Undertaking short-term or long-term projects to address a variety of issues  and needs </li>
                                    <li><span></span> Meeting with management or appropriate staff to understand their   requirements </li>
                                    <li><span></span> Using interviews, surveys etc. to collect necessary data </li>
                                </ul>
                                <a href="#">Start now <img src="/img/arr1.png"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p2help-block-one">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-md-1 col-md-6">
                        <div className="p2help-block-one-right">
                            <div className="p2help-block-one-heading">
                                <h4>Hybrid apps</h4>
                                <p>Finding suitable tech solutions.  Advising at crucial friction points, implementing solutions managing interactions between different suppliers.  </p>
                            </div>
                            <div className="p2help-block-one-list">
                                <ul>
                                    <li><span></span> Support portability – one code platform and can be utilized on multiple  platforms </li>
                                    <li><span></span> You can manage several hardware and software features by using  diverse plugins. </li>
                                    <li><span></span> Cost-effective mobile application development environment for all types of  stakeholders.</li>
                                </ul>
                                <a href="#">Start now <img src="/img/arr1.png"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-md-2 col-md-6">
                        <div className="p2help-block-one-left p2help-block-one-left-two">
                            <img src="/img/mb1.png" alt="images not found"/>
                        </div>
                    </div>							
                </div>
            </div>

            <div className="p2help-block-one">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-left p2help-block-one-left-three">
                            <img src="/img/mb2.png" alt="images not found"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="p2help-block-one-right">
                            <div className="p2help-block-one-heading">
                                <h4>Consulting</h4>
                                <p>Finding suitable tech solutions.  Ddvising at crucial friction points, implementing solutions managing   interactions between different suppliers.</p>
                            </div>
                            <div className="p2help-block-one-list">
                                <ul>
                                    <li><span></span> Undertaking short-term or long-term projects to address a variety of issues  and needs </li>
                                    <li><span></span> Meeting with management or appropriate staff to understand their    requirements </li>
                                    <li><span></span> Using interviews, surveys etc. to collect necessary data </li>
                                    <li><span></span> Job brief, Responsibilities, Requirements </li>
                                </ul>
                                <a href="#">Start now <img src="/img/arr1.png"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="p2help-block-one p2help-block-two">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1">
                  <div className="p2help-block-one-right">
                    <div className="p2help-block-one-heading">
                      <h4>Characterization & Specification</h4>
                      <p>
                        Gathering requirements and clients needs. Creating a
                        specification document that describes the solution.
                      </p>
                    </div>
                    <div className="p2help-block-one-list">
                      <ul>
                        <li>
                          <span></span> Physical description{" "}
                        </li>
                        <li>
                          <span></span> Actions{" "}
                        </li>
                        <li>
                          <span></span> Inner thoughts
                        </li>
                        <li>
                          <span></span>Reactions, and speech
                        </li>
                      </ul>
                      <a href="#">
                        Start now <img src="/img/arr1.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <div className="p2help-block-one-left p2help-block-four-right">
                    <img src="/img/lp.png" alt="images not found" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicep2Help;
