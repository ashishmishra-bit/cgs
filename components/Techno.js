import Link from "next/link";
import React, { useEffect, useState } from "react";
import Options from "./Options";
import ReactMarkdown from "react-markdown";

const Techno = ({ technologies, allTechs, fullData }) => {
  const [filterData, setFilterData] = useState(technologies);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    if (!filterValue) {
      setFilterData(technologies);
      return;
    }
    let array = [];
    console.log(technologies, "Technolo");
    technologies.map((tech) => {
      tech.project_tech_stacks.map((tech_stack) => {
        console.log(tech_stack.tech_stack_name);
        if (
          tech_stack.tech_stack_name
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        ) {
          array.push(tech);
          // exit;
        }
      });
    });
    setFilterData(array);
  }, [filterValue]);

  return (
    <div>
      <section id="service" className="service-two">
        <div className="container">
          <div className="service-wrapper">
            <div className="service-heading">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-left-heading">
                    <h2>{fullData?.data[0].attributes.technology_title}</h2>
                    <p>
                      <ReactMarkdown>
                        {fullData?.data[0].attributes.technology_description}
                      </ReactMarkdown>
                    </p>
                    <div className="p3lagname">
                      <p style={{ color: "black" }}>
                        All Technologies for our projects:{" "}
                      </p>
                      <ul
                        style={{
                          marginLeft: 0,
                          paddingLeft: 0,
                        }}
                      >
                        {allTechs.map((tech, index) => {
                          return (
                            <Options
                              key={index}
                              tech_stack_name={tech.tech_stack_name}
                              setFilterValue={setFilterValue}
                              filterValue={filterValue}
                            />
                          );
                        })}
                        {/* <li><a href="#">Vue</a></li>
                         <li><a href="#">HTML</a></li>
                         <li><a href="#">CSS</a></li>
                         <li><a href="#">JavaScript</a></li>
                         <li><a href="#">NodeJS</a></li>
                         <li><a href="#">PHP</a></li>
                         <li><a href="#">WordPress</a></li>
                         <li><a href="#">squidex</a></li>
                         <li><a href="#">Ionic</a></li>
                         <li><a href="#">Telegram bots</a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {filterData.map((technology, index) => {
                if (index % 2 == 0) {
                  return (
                    <div className="col-lg-6 col-md-6" key={index}>
                      <div className="service-left">
                        <div className="service-left-wrapper pr-2">
                          <div className="service-left-one wow slideInUp">
                            <div className="service-left-one-img">
                              <img
                                src={technology.project_image}
                                alt="images not found"
                              />
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {technology.project_tech_stacks.map(
                                  (tech, index) => (
                                    <li key={index}>
                                      <a href="#">{tech.tech_stack_name}</a>
                                    </li>
                                  )
                                )}
                              </ul>
                              <h4>{technology.project_title}</h4>
                              <p>{technology.project_content}</p>
                              <div className="more-link">
                                <Link href={`/application/${technology.id}`}>
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
                              <img src="/img/pro3.png" alt="images not found" />
                            </div>
                            <div className="service-left-one-content">
                              <ul>
                                {technology.project_tech_stacks.map(
                                  (tech, index) => (
                                    <li key={index}>
                                      <a href="#">{tech.tech_stack_name}</a>
                                    </li>
                                  )
                                )}
                              </ul>
                              <h4>{technology.project_title}</h4>
                              <p>{technology.project_content}</p>
                              <div className="more-link">
                                <Link href={`/application/${technology.id}`}>
                                  <a href="#">
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

              {/* <div className="col-lg-6 col-md-6">
                    <div className="service-left">								
                        <div className="service-left-wrapper pr-2">
                            <div className="service-left-one wow slideInUp">
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
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="service-right service-left p3serviceleft">
                        <div className="service-left-wrapper pl-2">
                            <div className="service-left-one wow slideInUp mt-0">
                                <div className="service-left-one-img">
                                    <img src="/img/pro3.png" alt="images not found"/>
                                </div>
                                <div className="service-left-one-content">
                                    <ul>
                                        <li><a href="#">React</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                    </ul>
                                    <h4>Find a Jobs | Website</h4>
                                    <p>Finding suitable tech solutions. <br/>
                                        Ddvising at crucial friction points, implementing solutions.</p>
                                    <div className="more-link">
                                        <a href="#">MORE <img src="/img/sright.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="service-left">
                        <div className="service-left-wrapper pr-2">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="service-right service-left p3serviceleft">
                        <div className="service-left-wrapper pl-2">
                            <div className="service-left-one wow slideInUp mt-0">
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
                            </div>
                            <div className="service-learn text-right">
                                <a style={{textDecoration:"none"}} href="#">view all <img src="/img/arr1.png"/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          </div>
        </div>
      </section>
      <style jsx>{``}</style>
    </div>
  );
};

export default Techno;
