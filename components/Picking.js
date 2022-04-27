import React from "react";

const Picking = ({ data }) => {
  return (
    <div>
      <section id="picking">
        <div className="container">
          <div className="picking-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="picking-left">
                  <div className="picking-heading">
                    <div className="service-left-heading">
                      <h2>{data?.project_title}</h2>
                      <p>
                        Listing of <strong>the technologies we us</strong> and a
                        short <br /> description.{" "}
                      </p>
                    </div>
                    <div className="pic-tech">
                      <p>Technologies which used for projects: </p>
                      <ul>
                        {data?.project_tech_stacks.map((tech, index) => (
                          <li key={index}>
                            <a href="#">{tech.tech_stack_name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pic-kind">
                      <div className="pic-kind-one">
                        <span>Industry:</span>
                        <p>{data?.industry}</p>
                      </div>
                      <div className="pic-kind-one">
                        <span>Country:</span>
                        <p>{data?.country}</p>
                      </div>
                      <div className="pic-kind-one">
                        <span>Kind:</span>
                        <p>{data?.kind}</p>
                      </div>
                    </div>
                  </div>
                  <div className="picking-left-bref">
                    <div className="picking-left-bref-img">
                      <img src={data?.project_image} alt="images not found" />
                      <div className="picking-right-content d-block d-md-none">
                        <span>Background: </span>
                        <p>
                          {data?.project_content?.substring(
                            data?.project_content.length / 2
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="picking-left-bref-content">
                      <div className="picking-right-img d-block d-md-none">
                        <img src={data?.project_image} alt="images not found" />
                      </div>
                      <p>
                        {data?.project_content?.substring(
                          data?.project_content.length / 2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="picking-right d-none d-md-block">
                  <div className="picking-right-content">
                    <span>Background: </span>
                    <p>
                      {data?.project_content?.substring(
                        0,
                        data?.project_content.length / 2
                      )}
                    </p>
                  </div>
                  <div className="picking-right-img">
                    <img src={data?.project_Image2} alt="images not found" />
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

export default Picking;
