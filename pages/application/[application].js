import React from "react";
import ApplicationHero from "../../components/ApplicationHero";
import Appser from "../../components/Appser";
import Footer from "../../components/Footer";
import FooterBanner from "../../components/FooterBanner";
import Layout from "../../components/Layout";
import Picking from "../../components/Picking";
import Stickytop from "../../components/Stickytop";

const application = ({ data, allData, footerData, locale }) => {
  console.log(locale);
  return (
    <div>
      <Layout active={3}>
        <ApplicationHero data={data} />
        <Picking data={data} />
        <Appser allData={allData} />
        <FooterBanner />
        <Footer footerData={footerData} />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ params, locale }) {
  let res = null;
  let footer = null;

  const fetchData = await fetch(
    `https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks`
  );
  const parsedData = await fetchData.json();
  if (parsedData) {
    parsedData?.data[0].attributes?.technologies.map((item, index) => {
      if (item.id == params?.application) {
        res = item;
      }
    });
  }

  if (locale == "heb") {
    const fetchData = await fetch(
      `https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks&locale=he-IL`
    );
    const parsedData = await fetchData.json();
    if (parsedData) {
      parsedData?.data[0].attributes?.technologies.map((item, index) => {
        if (item.id == params?.application) {
          res = item;
        }
      });
    }
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*&locale=he-IL"
    );
    footer = await res3.json();
  } else {
    const fetchData = await fetch(
      `https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks`
    );
    const parsedData = await fetchData.json();
    if (parsedData) {
      parsedData.data[0].attributes.technologies.map((item, index) => {
        if (item.id == params?.application) {
          res = item;
        }
      });
    }
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*"
    );
    footer = await res3.json();
  }

  const res3 = await fetch(
    "https://cgsapi.herokuapp.com/api/footers?populate=*"
  );
  footer = await res3.json();

  return {
    props: {
      data: res,
      allData: parsedData?.data[0]?.attributes?.technologies,
      footerData: footer?.data[0],
      locale,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const object = {
    paths: [],
    fallback: "blocking",
  };
  const data = await fetch(
    `https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks`
  );
  const parsedData = await data?.json();

  parsedData?.data[0]?.attributes?.technologies?.map((e, i) => {
    object.paths?.push({
      params: {
        application: `${e?.id}`,
      },
    });
  });
  return object;
}

export default application;
