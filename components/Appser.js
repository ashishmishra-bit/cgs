import Link from "next/link";
import React from "react";

const Appser = ({ allData }) => {
  return (
    <div>
      <section id="service" className="service-two appser">
        <div className="container">
          <div className="service-wrapper">
            <div className="service-heading">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-left-heading">
                    <h2>Other our cases</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {allData.map((data, index) => {
                if (index % 2 == 0) {
                  return (
                    <div className="col-lg-6 col-md-6" key={index}>
                      <div className="service-left">
                        <div className="service-left-wrapper pr-2">
                          <div className="service-left-one wow slideInUp">
                            <div className="service-left-one-img">
                              <img
                                src={data.project_image}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {data.project_tech_stacks.map((item, index) => (
                                  <li key={index}>
                                    <a href="#">{item.tech_stack_name}</a>
                                  </li>
                                ))}
                              </ul>
                              <h4>{data.project_title}</h4>
                              <p>{data?.project_content.substring(0, 100)}</p>
                              <div className="more-link">
                                <Link href={`${data.id}`}>
                                  <a>
                                    MORE <img src="/img/sright.png" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-lg-6 col-md-6">
                      <div className="service-right service-left p3serviceleft">
                        <div className="service-left-wrapper pl-2">
                          <div className="service-left-one wow slideInUp mt-0">
                            <div className="service-left-one-img">
                              <img
                                src={data.project_image}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {data.project_tech_stacks.map((item, index) => (
                                  <li key={index}>
                                    <a href="#">{item.tech_stack_name}</a>
                                  </li>
                                ))}
                              </ul>
                              <h4>{data.project_title}</h4>
                              <p>
                                Finding suitable tech solutions. <br />
                                Ddvising at crucial friction points,
                                implementing solutions.
                              </p>
                              <div className="more-link">
                                <Link href={`${data.id}`}>
                                  <a>
                                    MORE <img src="/img/sright.png" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            {/* <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="service-left">
                  <div className="service-left-wrapper pr-2">
                    <div className="service-left-one wow slideInUp">
                      <div className="service-left-one-img">
                        <img src="/img/oc2.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <ul>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                        <h4>Our values | Website</h4>
                        <p>
                          Finding suitable tech solutions. <br />
                          Ddvising at crucial friction points, implementing
                          solutions.
                        </p>
                        <div className="more-link">
                          <a href="#">
                            MORE <img src="/img/sright.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-right service-left p3serviceleft">
                  <div className="service-left-wrapper pl-2">
                    <div className="service-left-one wow slideInUp mt-0">
                      <div className="service-left-one-img">
                        <img src="/img/oc1.png" alt="images not found" />
                      </div>
                      <div className="service-left-one-content">
                        <ul>
                          <li>
                            <a href="#">Vue</a>
                          </li>
                          <li>
                            <a href="#">WordPress</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                        <h4>Best Trading Brokers | Website</h4>
                        <p>
                          Finding suitable tech solutions. <br />
                          Ddvising at crucial friction points, implementing
                          solutions.
                        </p>
                        <div className="more-link">
                          <a href="#">
                            MORE <img src="/img/sright.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
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

export default Appser;
