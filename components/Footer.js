import Link from "next/link";
import React from "react";

const Footer = ({footerData, active}) => {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-logo">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="footer-left">
                    <div className="footer-left-logo">
                      <Link href="/">
                        <a>
                          <img src="/img/logo.png" alt="images not found" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-left-link text-right d-none d-lg-block">
                    <ul>
                      <li>
                        <Link href="/">
                        <a className={active==1?"active":""} href="#">
                          Home
                        </a></Link>
                      </li>
                      <li>
                        <Link href="/services">
                        <a className={active==2?"active":""} >Services</a></Link>
                      </li>
                      <li>
                        <Link href="/technology">
                        <a className={active==3?"active":""} >Technologies</a></Link>
                      </li>
                      <li>
                        <Link href="/blog">
                        <a className={active==4?"active":""} >Blog</a></Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                        <a className={active==5?"active":""} >About Us</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-address">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-add-left">
                    <div className="footer-add-left-one">
                      <p>Call us:</p>
                      <ul>
                        <li>
                          <a href=" tel:+97254-652-2627 ">
                            <img src="/img/phn.svg" alt="images not found" />{" "}
                            {footerData.attributes.contact[0].call_us}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-add-left-one footer-add-left-two">
                      <p>Our Email:</p>
                      <ul>
                        <li>
                          <a href= {`mailto:${footerData.attributes.contact.email}`} >
                            <img src="/img/mail.svg" alt="images not found" />{" "}
                            {footerData.attributes.contact[0].email}

                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-ad-right">
                    <div className="footer-ad-right-left footer-add-left-one">
                      <p>Our Address:</p>
                      <ul>
                        <li>
                          <img src="/img/lock.svg" alt="images not found" />
                          {footerData.attributes.contact[0].address}

                        </li>
                      </ul>
                    </div>
                    <div className="footer-ad-right-social">
                      <ul>
                        <li>
                          <Link href={footerData.attributes.contact[0].linkedin} >
                          <a target="_blank" >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={footerData.attributes.contact[0].facebook} >
                          <a target="_blank" >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-left-link text-right d-block d-lg-none">
                    <ul>
                      <li>
                          <Link href="/"><a className="active" >
                          Home
                        </a></Link>
                        
                      </li>
                      <li>
                          <Link href="/service"><a >Services</a></Link>
                        
                      </li>
                      <li>
                          <Link href="/technology"><a >Technologies</a></Link>
                        
                      </li>
                      <li>
                          <Link href="/blog"><a >Blog</a></Link>
                        
                      </li>
                      <li>
                          <Link href="/about">
                        <a >About Us</a>

                          </Link>
                      </li>
                    </ul>
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

export default Footer;
