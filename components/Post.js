import Link from "next/link";
import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      {" "}
      <section id="post">
        <div className="container">
          <div className="post-wrapper">
            <div className="row">
              {/* <div className="col-lg-4">
                <div className="post-left">
                   <div className="post-left-one">
                      <div className="post-left-img">
                         <img src="/img/post1.png" alt="images not found"/>
                      </div>
                      <div className="post-left-content">
                         <h4>Consulting</h4>
                         <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points,
                            implementing <br/> solutions managing interactions between <br/> different suppliers.
                         </p>
                         <div className="post-left-link">
                            <a href="#">Read more <img src="/img/arr1.png"/></a>
                            <span>June 29, 2021</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div> */}
              {posts.map((item, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="post-middle">
                    <div className="post-left-one">
                      <div className="post-left-img">
                        <img
                          src={item.attributes.post_banner}
                          alt="images not found"
                        />
                      </div>
                      <div className="post-left-content">
                        <h4>{item.attributes.post_title}</h4>
                        <p>
                          Finding suitable tech solutions. <br /> Ddvising at
                          crucial friction points, implementing <br /> Why
                          getting rewarded feels so good.
                        </p>
                        <div className="post-left-link">
                          <Link href={`/blog/${item.id}`}>
                            <a>
                              Read more <img src="/img/arr1.png" />
                            </a>
                          </Link>
                          <span>June 29, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-lg-4">
                <div className="post-right">
                   <div className="post-left-one">
                      <div className="post-left-img">
                         <img src="/img/post2.png" alt="images not found"/>
                      </div>
                      <div className="post-left-content">
                         <h4>Stay on top of developer news</h4>
                         <p>FindTo make sure you’re aware of the latest Google Workspace Platform updates for
                            developers, make sure you subscribe to our Google Workspace Developers Newsletter
                         </p>
                         <div className="post-left-link">
                            <a href="#">Read more <img src="/img/arr1.png"/></a>
                            <span>June 29, 2021</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-lg-4">
                <div className="post-middle">
                   <div className="post-left-one">
                      <div className="post-left-content">
                         <h4>Refresh your Marketplace <br/> application listing and <br/> marketing assets</h4>
                         <p>You should also include well designed feature graphics in your listing
                         </p>
                         <div className="post-left-link">
                            <a href="#">Read more <img src="/img/arr1.png"/></a>
                            <span>June 29, 2021</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-lg-4">
                <div className="post-middle" id="minone">
                   <div className="post-left-one">
                      <div className="post-left-img">
                         <img src="/img/post3.png" alt="images not found"/>
                      </div>
                      <div className="post-left-content">
                         <h4>Consulting</h4>
                         <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points,
                            implementing <br/> solutions managing interactions between <br/> different suppliers.
                         </p>
                         <div className="post-left-link">
                            <a href="#">Read more <img src="/img/arr1.png"/></a>
                            <span>June 29, 2021</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-lg-4">
                <div className="post-right">
                   <div className="post-left-one">
                      <div className="post-left-content">
                         <h4>The Science Behind Gamification</h4>
                         <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points, implementing. Why getting rewarded feels so good.</p>
                         <div className="post-left-link">
                            <a href="#">Read more <img src="/img/arr1.png"/></a>
                            <span>June 29, 2021</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-lg-4">
             <div className="post-left">
                <div className="post-left-one">
                   <div className="post-left-img">
                      <img src="/img/post1.png" alt="images not found"/>
                   </div>
                   <div className="post-left-content">
                      <h4>Consulting</h4>
                      <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points,
                         implementing <br/> solutions managing interactions between <br/> different suppliers.
                      </p>
                      <div className="post-left-link">
                         <a href="#">Read more <img src="/img/arr1.png"/></a>
                         <span>June 29, 2021</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-4">
             <div className="post-middle">
                <div className="post-left-one">
                   <div className="post-left-content">
                      <h4>Refresh your Marketplace application listing and marketing assets </h4>
                      <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points,
                         implementing <br/> Why getting rewarded feels so good.
                      </p>
                      <div className="post-left-link">
                         <a href="#">Read more <img src="/img/arr1.png"/></a>
                         <span>June 29, 2021</span>
                      </div>
                   </div>
                </div>
             </div>
             <div className="post-middle">
                <div className="post-left-one">
                   <div className="post-left-content">
                      <h4>The Science Behind <br/> Gamification</h4>
                      <p>Finding suitable tech solutions. <br/> Ddvising at crucial friction points,
                         implementing <br/> Why getting rewarded feels so good.
                      </p>
                      <div className="post-left-link">
                         <a href="#">Read more <img src="/img/arr1.png"/></a>
                         <span>June 29, 2021</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-4">
             <div className="post-right">
                <div className="post-left-one">
                   <div className="post-left-img">
                      <img src="/img/post2.png" alt="images not found"/>
                   </div>
                   <div className="post-left-content">
                      <h4>Stay on top of developer news</h4>
                      <p>FindTo make sure you’re aware of the latest Google Workspace Platform updates for
                         developers, make sure you subscribe to our Google Workspace Developers Newsletter
                      </p>
                      <div className="post-left-link">
                         <a href="#">Read more <img src="/img/arr1.png"/></a>
                         <span>June 29, 2021</span>
                      </div>
                   </div>
                </div>
             </div>
          </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
