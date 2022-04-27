import React, { useState } from "react";
import Contact from "./Contact";

const FooterBanner = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <section id="world">
        <div className="container">
          <div className="world-wrapper text-center">
            <h2>
              Improving the World <br /> With the right people
            </h2>
            <a onClick={()=>{
              setActiveItem(1)
            }}>
              Start A project now{" "}
              <span>
                <img src="/img/lk.png" alt="images not found" />
              </span>{" "}
            </a>
            <div className="world-icon">
              <ul>
                <li>
                  <img src="/img/fi1.png" alt="images not found" />
                </li>
                <li>
                  <img src="/img/fi2.png" alt="images not found" />
                </li>
                <li>
                  <img src="/img/fi3.png" alt="images not found" />
                </li>
                <li>
                  <img src="/img/fi4.png" alt="images not found" />
                </li>
                <li>
                  <img src="/img/fi5.png" alt="images not found" />
                </li>
                <li>
                  <img src="/img/fi6.png" alt="images not found" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {activeItem?<Contact setActiveItem={setActiveItem}/>:null}
    </div>
  );
};

export default FooterBanner;
