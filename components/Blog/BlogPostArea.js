import Link from "next/link";
import React from "react";

const BlogPostArea = ({ blogs }) => {
  return (
    <section id="post">
      <div className="container">
        <div className="post-wrapper">
          <div className="row">
            {blogs.map((blog, index) => (
              <div className={`col-lg-4  ${index>2&&index%2==0?"marginTop":""} `} key={index}>
                <div className="post-left">
                  <div className="post-left-one">
                    <div className="post-left-img">
                       {index%2==0?<img
                        src={blog.attributes.post_banner}
                        alt="images not found"
                      />:null}
                      
                    </div>
                    <div className="post-left-content">
                      <h4>{blog.attributes.post_title}</h4>
                      <p>{blog.attributes.post_description}</p>
                      <div className="post-left-link">
                        <Link  href={{ pathname: `/blog/${blog.id}`, query: { name: blog.attributes.post_title.toLowerCase() } }} >
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

            {/* Single Blog */}
            {/* <div className="col-lg-4">
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

            {/* The End Of Blogs */}
          </div>
        </div>
      </div>
      <style jsx>
         {
            `
            .marginTop{
               margin-top: -129px;
            }
            `
         }
      </style>
    </section>
  );
};

export default BlogPostArea;
