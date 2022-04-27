import Head from "next/head";
import Link from "next/link";
import React from "react";

const ScrollToTop = () => {
  return (
    <>
      <Head></Head>
      <Link href="#">
        <a id="scrollBox" className="scrolltotop">
          <i className="fas fa-angle-up"></i>
        </a>
      </Link>
    </>
  );
};

export default ScrollToTop;
