import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

const Navbar = ({active,route,isLeft, SetisLeft}) => {
  const router =  useRouter();
  // create a useState
  const [activeItem, setActiveItem] = React.useState(0);

  React.useEffect(() => {
    
    let smallLogo =  document.getElementById("smllo");
    let bigLogo =  document.getElementById("scrolllo");
    let scroll = document.getElementById("scrollBox");

    window.onscroll = ()=>{
      if (window.scrollY > 20){
        smallLogo.classList.remove("myhidden");
        bigLogo.classList.add("myhidden");
         // listItem.style.color="#fefefe";
         
      }
      else{
        smallLogo.classList.add("myhidden");
        bigLogo.classList.remove("myhidden");
         // listItem.style.color="#343434";


      }

      if(window.scrollY>250)
      {
        scroll.classList.remove("myhidden");
        
      }else {
        document.getElementById("scrollBox").classList.add("myhidden");

      }
   }
  });
  return (
    <div>
      <header className="sticky-top bg-white">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                <a >
                  
                  <img
                    id="scrolllo"
                    src="/img/logo.png"
                    alt="images not found"
                  />
                  <img id="smllo" src="/img/smlogo.png" alt="images not found" className="myhidden" />
                </a>
                </Link>
              </div>
              <div className="bar d-block d-lg-none" onClick={()=>{
                SetisLeft(!isLeft)
              }}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="header-right">
              <div className="header-right-one">
                <ul>
                  <li>
                    <Link href="/">
                      <a className={`${active==1?"active":""}`}>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a className={`${active==2?"active":""}`}>Services</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/technology">

                      <a className={`${active==3?"active":""}`}>Technologies</a></Link>
                  </li>
                  <li>
                  <Link href="/blog">
                      <a className={`${active==4?"active":""}`}>Blog</a></Link>
                  </li>
                  <li>
                  <Link href="/about-us">

                      <a className={`${active==5?"active":""}`}>About Us</a></Link>
                  </li>
                </ul>
              </div>
              <div className="header-right-two">
                <ul>
                  <li>
                    <Link href={route?`/${route}`:"/"} locale="en-US" >
                    <a className={router.locale=="en-US"?"active":""} >
                      En
                    </a></Link>
                  </li>
                  <li>
                  <Link href={route?`/${route}`:"/"} locale="heb" >
                    <a className={router.locale=="en-US"?"":"active ml-3"} >Heb</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      href="javascript:void(0);"
                      onClick={() => setActiveItem(1)}
                    >
                      Contact Us
                      <img src="/img/arr.png" alt="images not found" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {activeItem?<Contact setActiveItem={setActiveItem}/>:null}
        

      </header>
      <ScrollToTop/>
      {/* <a href="#" id="scrollBox" className="scrolltotop myHidden "><i className="fas fa-angle-up"></i></a>	 */}
      <style jsx>{`
        a{
          text-decoration:none;
        }
        .myhidden{
          display:none;
        }
        .sticky-top{
          position:fixed;
          top:0;
          width:100%;
        }
      ` }</style>
    </div>
  );
};

export default Navbar;
