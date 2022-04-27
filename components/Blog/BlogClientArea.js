import React from "react";

const BlogClientArea = ({ clients }) => {
  return (
    <section id="client">
      <div className="container">
        <div className="client-wrapper">
          <div className="client-heading">
            <h4>Our Clients</h4>
          </div>
          <div className="client-logo">
          {console.log(clients,"Hey Clients ")}

            {clients.map((e, i) => {
              return (
                <div className="client-logo-one" key={i}>
                  <img src={e.client_image} alt="images not found" />
                </div>
              );
            })}
            {/* <div className="client-logo-one">
                     <img src="/img/clx1.png" alt="images not found"/>
                  </div>
                  <div className="client-logo-one">
                     <img src="/img/clx2.png" alt="images not found"/>
                  </div>
                  <div className="client-logo-one">
                     <img src="/img/clx3.png" alt="images not found"/>
                  </div>
                  <div className="client-logo-one">
                     <img src="/img/clx4.png" alt="images not found"/>
                  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogClientArea;
