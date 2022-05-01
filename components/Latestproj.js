import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Latestproj = ({ projects, fullData }) => {
  console.log(fullData , "projects");
  return (
    <div className={"new" + (fullData?.data[0].attributes.hide_projects? 'hidden ' : ' ')}>
      
      <section id="service" className={"service-two "}>
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="container"
        >
          <div className="service-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="service-left">
                  <div className="service-left-heading">
                    <h2>{fullData?.data[0].attributes.project_heading}</h2>
                    <p>
                      <ReactMarkdown>
                        {fullData?.data[0].attributes.project_description}
                      </ReactMarkdown>
                    </p>
                  </div>
                  <div className="service-left-wrapper pr-2">
                    {projects.slice(0, 4).map((project, index) => {
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
                                src={project.project_image}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {project.project_tech_stacks.map(
                                  (item, key) => {
                                    return (
                                      <li key={index}>
                                        <a href="#">{item.tech_stack_name}</a>
                                      </li>
                                    );
                                  }
                                )}

                                <li>
                                  <a href="#">HTML</a>
                                </li>
                                <li>
                                  <a href="#">CSS</a>
                                </li>
                              </ul>
                              <h4>{project.project_title}</h4>
                              <p>
                                <ReactMarkdown>
                                  {project.project_content}
                                </ReactMarkdown>
                              </p>
                              <div className="more-link">
                                <a href="#">
                                  MORE <img src="/img/sright.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {/* <div className="service-left-one wow slideInUp">
                                <div className="service-left-one-img">
                                    <img src="/img/pro1.png" alt="images not found"/>
                                </div>
                                <div className="service-left-one-content">
                                    <ul>
                                        <li><a href="#">JavaScript</a></li>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                    <h4>Parking Mobile Application</h4>
                                    <p>Finding suitable tech solutions. <br/>
                                        Ddvising at crucial friction points, implementing solutions.</p>
                                    <div className="more-link">
                                        <a href="#">MORE <img src="/img/sright.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="service-left-one wow slideInUp">
                                <div className="service-left-one-img">
                                    <img src="/img/pro2.png" alt="images not found"/>
                                </div>
                                <div className="service-left-one-content">
                                    <ul>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                    <h4>Our values | Website</h4>
                                    <p>Finding suitable tech solutions. <br/>
                                        Ddvising at crucial friction points, implementing solutions.</p>
                                    <div className="more-link">
                                        <a href="#">MORE <img src="/img/sright.png" alt=""/></a>
                                    </div>
                                </div>
                            </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-right service-left">
                  <div className="service-left-wrapper pl-2">
                    {projects.slice(0, 4).map((project, index) => {
                      if (index % 2 != 0) {
                        return (
                          <div
                            className="service-left-one wow slideInUp mt-5"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <div className="service-left-one-img">
                              {project?.project_image && (
                                <img
                                  src={project?.project_image}
                                  alt="images not found"
                                />
                              )}
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {project.project_tech_stacks.map(
                                  (item, key) => {
                                    return (
                                      <li key={index}>
                                        <a href="#">{item.tech_stack_name}</a>
                                      </li>
                                    );
                                  }
                                )}
                                <li>
                                  <a href="#">React</a>
                                </li>
                                <li>
                                  <a href="#">JavaScript</a>
                                </li>
                              </ul>
                              <h4>{project.project_title}</h4>
                              <p>{project.project_content}</p>
                              <div className="more-link">
                                <a href="#">
                                  MORE <img src="/img/sright.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {/* <div className="service-left-one wow slideInUp mt-0">
                                <div className="service-left-one-img">
                                    <img src={project.project_image} alt="images not found"/>
                                </div>
                                <div className="service-left-one-content">
                                    <ul>
                                    {project.project_tech_stacks.map((item,key)=>{
                                                    return(<li key={index}><a href="#">{item.tech_stack_name}</a></li>)
                                                })}
                                        <li><a href="#">React</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                    </ul>
                                    <h4>{project.project_title}</h4>
                                    <p>{project.project_content}</p>
                                    <div className="more-link">
                                        <a href="#">MORE <img src="/img/sright.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="service-left-one wow slideInUp">
                                <div className="service-left-one-img">
                                    <img src="/img/pro4.png" alt="images not found"/>
                                </div>
                                <div className="service-left-one-content">
                                    <ul>
                                        <li><a href="#">Vue</a></li>
                                        <li><a href="#">WordPress</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                    <h4>Best Trading Brokers | Website</h4>
                                    <p>Finding suitable tech solutions. <br/>
                                        Ddvising at crucial friction points, implementing solutions.</p>
                                    <div className="more-link">
                                        <a href="#">MORE <img src="/img/sright.png" alt=""/></a>
                                    </div>
                                </div>
                            </div> */}
                    <div className="service-learn text-right">
                      <Link href="/technology">
                        <a style={{ textDecoration: "none" }}>
                          Show more cases <img src="/img/arr1.png" />{" "}
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
      <style jsx>
        {`          
          .hidden{
            display:none;
          }
        `}
      </style>
    </div>
  );
};

export default Latestproj;
