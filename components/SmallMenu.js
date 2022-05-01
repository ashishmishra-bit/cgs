import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SmallMenu = ({ isLeft, SetisLeft, active,route }) => {
  const router =  useRouter();
  return (
    <div className={`sm-menu ${isLeft ? "leftMenu" : "realMenu"} `}>
      <div className="sm-header">
        <a href="#">
          <img src="/img/logo.png" alt="images not found" />
        </a>
        <span
          onClick={() => {
            SetisLeft(!isLeft);
          }}
        >
          <img src="/img/x.png" alt="images not found" />
        </span>
      </div>
      <div className="container">
        <div className="sm-menu-wrapper text-center">
          <div className="sm-menu-lang">
            <ul>
              <li>
                <a className="active" href="#">
                  En
                </a>
              </li>
              <li>
              <Link href={route?`/${route}`:"/"} locale="heb" >
                    <a className={router.locale=="en-US"?"":"active ml-3"} >Heb</a>
                    </Link>
              </li>
            </ul>
          </div>
          <div className="sm-menu-link">
            <ul>
              <li>
                <Link href="/">
                  <a className={active == 1 ? "active" : ""}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className={active == 2 ? "active" : ""}>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className={active == 3 ? "active" : ""}>Technologies</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className={active == 4 ? "active" : ""}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className={active == 5 ? "active" : ""}>About Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm-menu-contact">
            <a
              data-toggle="modal"
              data-target="#exampleModal"
              href="javascript:void(0);"
            >
              Contact Us <img src="/img/arr.png" alt="images not found" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallMenu;
