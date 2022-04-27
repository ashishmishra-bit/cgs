import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        {/* cdn link for bootstrap v5  */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crosOrigin="anonymous"
        ></script>

{/* <!-- Fontawesome Script --> */}
		<script src="https://kit.fontawesome.com/7749c9f08a.js"></script>
    

        {/* <!-- Fav Icon --> */}
        <link rel="icon" href="/img/fav.png" />

        {/* <!-- Include Bootstrap --> */}
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="jquery.min.js"></script>
        <script src="owlcarousel/owl.carousel.min.js"></script>
        {/* ok */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
