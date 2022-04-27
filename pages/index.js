import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import Copyarea from "../components/CopyArea";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Hero from "../components/Hero";
import Testinomials from "../components/Home/Testinomials";
import Latestproj from "../components/Latestproj";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Servicearea from "../components/Servicearea";
import SmallMenu from "../components/SmallMenu";
import TechnologiesUsed from "../components/TechnologiesUsed";
import styles from "../styles/Home.module.css";

// https://cgsapi.herokuapp.com/api/homes?populate[0]=projects.project_tech_stacks,services,testimonials,technologies

const Index = ({
  projects,
  services,
  testimonials,
  technologies,
  data,
  footerData,
}) => {
  console.log(data)

  return (
    <div>
      {/* <Script type="text/javascript" src="./assets/js/owl.carousel.min.js" /> */}
      {/* <Menu */}
      <Layout active={1}>
        <Hero data={data} />
        <Servicearea services={services} />
        <TechnologiesUsed technologies={technologies} />

        <Latestproj projects={projects} />
        <Testinomials testimonials={testimonials} />
        <FooterBanner />
        <Footer footerData={footerData} active={1} />
        <Copyarea footerData={footerData} />
      </Layout>
      <style jsx>{``}</style>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { locale } = context;

  let translated = undefined;
  let json = undefined;

  if (locale == "heb") {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/homes?populate=*&locale=he-IL"
    );
    json = await res.json();
  } else {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/homes?populate=*"
    );
    json = await res.json();
  }

  const res2 = await fetch(
    "https://cgsapi.herokuapp.com/api/projects?populate[0]=projects,projects.project_tech_stacks"
  );

  const json2 = await res2.json();

  const res3 = await fetch(
    "https://cgsapi.herokuapp.com/api/footers?populate=*"
  );
  const footer = await res3.json();

  return {
    props: {
      projects: json2.data[0].attributes.projects,
      services: json.data[0].attributes.services,
      testimonials: json.data[0].attributes.testimonials,
      technologies: json.data[0].attributes.technologies,
      data: json.data[0].attributes,
      footerData: footer.data[0],
    },
    revalidate: 1,
  };
};

export default Index;
