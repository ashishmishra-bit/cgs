import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactMarkdown from "react-markdown";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
{
  /* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */
}

export default MyApp;
