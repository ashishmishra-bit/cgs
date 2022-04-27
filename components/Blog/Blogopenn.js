import React from 'react'
import Link from 'next/link'

const Blogopenn = ({data}) => {
  return (
    <div><section id="blog">
    <div className="container mt-5">
       <div className="blog-wrapper">
          <div className="blog-back">
             <div className="app-left-back d-none d-lg-block mb-0">
                <Link href="/blog">
                <a > <img src={"/img/aleft.png"} alt="images not found"/> Back </a></Link>
             </div>
          </div>
          <div className="blog-heading text-center">
             <h2>{data.post_title} </h2>
             <img className="d-none d-md-block" src={data.post_banner} alt="images not found"/>
             <img className="d-block d-md-none" src={data.post_banner} alt="images not found"/>
             <div className="blog-heading-text">
                <p id="at">{data.post_content}</p>
             </div>
          </div>
       </div>
    </div>
 </section></div>
  )
}

export default Blogopenn