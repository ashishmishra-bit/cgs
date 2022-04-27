import React from "react";
import BlogClientArea from "../components/Blog/BlogClientArea";
import BlogHero from "../components/Blog/BlogHero";
import BlogPostArea from "../components/Blog/BlogPostArea";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Blog = ({ blogs, clients, footerData, data, json }) => {
  return (
    <div>
      <Layout active={4}>
        <BlogHero data={data} fullData={json} />
        <BlogPostArea blogs={blogs} fullData={json} />
        <BlogClientArea clients={clients} />
        <FooterBanner />
        <Footer footerData={footerData} active={4} />
      </Layout>
    </div>
  );
};

// &locale=he-IL

export const getStaticProps = async (context) => {
  const { locale } = context;

  let json = undefined;
  let footer = undefined;
  let clients = undefined;

  if (locale == "heb") {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/posts/?populate=*"
    );
    const res2 = await fetch(
      "https://cgsapi.herokuapp.com/api/blogs?populate=*&locale=he-IL"
    );
    clients = await res2.json();
    json = await res.json();
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*"
    );
    footer = await res3.json();
  } else {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/posts/?populate=*"
    );
    const res2 = await fetch(
      "https://cgsapi.herokuapp.com/api/blogs?populate=*"
    );
    clients = await res2.json();
    json = await res.json();
    const res3 = await fetch(
      "https://cgsapi.herokuapp.com/api/footers?populate=*"
    );
    footer = await res3.json();
  }

  return {
    props: {
      json,
      blogs: json.data,
      clients: clients.data[0].attributes.our_clients,
      footerData: footer.data[0],
      data: clients.data[0].attributes,
    },
  };
};

export default Blog;
