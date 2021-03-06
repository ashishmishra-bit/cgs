import React from "react";
import CountUp from "react-countup";
import ReactMarkdown from "react-markdown";

const AboutProjectArea = ({ data, fullData }) => {
  return (
    <section id="project">
      <div className="container">
        <div className="project-wrapper">
          <div className="project-number">
            <div className="single-coutnerup">
              <span className="count-num">
                +<CountUp end={data.talented_devs} />
              </span>
              <h4 className="title">Talented devs</h4>
            </div>
            <div className="single-coutnerup" id="signle-middle">
              <span className="count-num">
                +<CountUp end={data.active_projects} />
              </span>
              <h4 className="title">Active projects</h4>
            </div>
            <div className="single-coutnerup">
              <span className="count-num">
                +<CountUp end={data.finished_projects} />
              </span>
              <h4 className="title">Finished projects</h4>
            </div>
          </div>
          <div className="project-para">
            <p>
              <ReactMarkdown>
                {fullData?.data[0]?.attributes.about_description}
              </ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectArea;
