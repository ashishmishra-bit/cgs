import React from "react";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ServiceHero from "../components/ServiceHero";
import Servicep2Help from "../components/Servicep2Help";
import Servicep2Work from "../components/Servicep2Work";

const Services = ({ service_card, how_it_works, data, footerData }) => {
  return (
    <div>
      <Layout active={2} route="/services">
        <ServiceHero data={data} service_card={service_card} />
        <Servicep2Work
          how_it_works={how_it_works}
          desc={data.how_it_works_desc}
        />
        <Servicep2Help
          service_card={service_card}
          title={data.title}
          desc={data.description}
        />
        <FooterBanner />
        <Footer footerData={footerData} active={2} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { locale } = context;

  let json = undefined;
  let footer = undefined;

  if (locale == "heb") {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/services?populate[0]=service_card.key,how_it_works&locale=he-IL"
    );
    json = await res.json();
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*&locale=he-IL"
    );
    footer = await res3.json();
  } else {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/services?populate[0]=service_card.key,how_it_works"
    );
    json = await res.json();
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*"
    );
    footer = await res3.json();
  }

  return {
    props: {
      service_card: json?.data[0]?.attributes.service_card,
      how_it_works: json?.data[0]?.attributes.how_it_works,
      data: json?.data[0]?.attributes,
      footerData: footer.data[0],
    },
    revalidate: 1,
  };
};

export default Services;
