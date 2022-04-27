import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutProjectArea from "../components/About/AboutProjectArea";
import Teams from "../components/About/Teams";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Aboutus = ({ data, teams,footerData }) => {
  return (
    <div>
      <Layout active={5} route="/about-us">
      <AboutHero data={data} />
      <AboutProjectArea data={data} />
      <Teams teams={teams} />
      <FooterBanner  />
      <Footer footerData={footerData} active={5} />
      </Layout>
    </div>
  );
};
// https://cgsapi.herokuapp.com/api/abouts?populate=*

// Fetch Inital Props nextjs

export const getStaticProps = async (context) => {
  const { locale } = context;

  let translated = undefined;
  let json = undefined;

  if (locale == "heb") {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/abouts?populate=*&locale=he-IL"
    );
    json = await res.json();
  } else {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/abouts?populate=*"
    );
    json = await res.json();
  }

  const res3 =  await fetch("https://cgsapi.herokuapp.com/api/footers?populate=*");
  const footer =  await res3.json();

  return {
    props: {
      data: json.data[0].attributes,
      teams: json.data[0].attributes.our_team,
      footerData :  footer.data[0]
    },
  };
};

export default Aboutus;
