import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Servicep2Work = ({ how_it_works, desc, fullData }) => {
  const [heading, setHeading] = useState();

  const getHeadings = async () => {
    const res = await fetch("https://cgsapi.herokuapp.com/api/services");
    const headings = await res.json();
    setHeading(headings.data[0]);
  };

  useEffect(() => {
    getHeadings();
  }, []);

  return (
    <div>
      <section id="p2work">
        <div className="container">
          <div className="p2work-wrapper">
            <div className="p2work-heading text-center">
              <h2>{fullData?.data[0].attributes.how_it_works_title}</h2>

              <p>
                <ReactMarkdown>
                  {fullData?.data[0].attributes.how_it_works_desc}
                </ReactMarkdown>
                {/* <ReactMarkdown
                  children={heading?.attributes.how_it_works_desc}
                /> */}
              </p>
            </div>
            <div className="p2workcontent">
              {how_it_works.map((item, index) => {
                return (
                  <div className="p2work-one" key={index}>
                    <p>
                      {" "}
                      <img src={item.icon} alt="images not found" />{" "}
                      {item.content}
                    </p>
                  </div>
                );
              })}
              {/* <div className="p2work-one">
                    <p> <img src="/img/an1.svg" alt="images not found"/> Analysis of Requirement</p>
                </div>
                <div className="p2work-one">
                    <p> <img src="/img/an2.png" alt="images not found"/> Coding/Implementation</p>
                </div>
                <div className="p2work-one">
                    <p> <img src="/img/an3.png" alt="images not found"/> Testing</p>
                </div>
                <div className="p2work-one">
                    <p> <img src="/img/an4.png" alt="images not found"/> Deployment Stage</p>
                </div>
                <div className="p2work-one p2work-two">
                    <p> <img src="/img/an5.png" alt="images not found"/> Maintenance</p>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicep2Work;
