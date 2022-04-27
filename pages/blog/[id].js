import React, { useEffect } from "react";
import Blogopenn from "../../components/Blog/Blogopenn";
import Client from "../../components/Client";
import Footer from "../../components/Footer";
import FooterBanner from "../../components/FooterBanner";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import Stickytop from "../../components/Stickytop";

const Id = ({ data ,allBlog,footerData}) => {

  console.log(data)
  return (
    <div>
      <Layout active={4} route="blog">
      <Blogopenn data={data} />
      <Post posts =  {allBlog} />
      <Client />
      <FooterBanner />
      <Footer footerData={footerData} />
      </Layout>
    </div>
  );
};







export async function getStaticProps({ params }) {
  const fetchData = await fetch(`https://cgsapi.herokuapp.com/api/posts/${params.id}?populate=*`);
  const data2 =  await fetch('https://cgsapi.herokuapp.com/api/posts/?populate=*')
  const allBlog =  await data2.json();
  const parsedData = await fetchData.json();
  const res3 =  await fetch("https://cgsapi.herokuapp.com/api/footers?populate=*");
  const footer =  await res3.json();

  return {
    props: {
      data:parsedData.data?.attributes,
      allBlog:allBlog.data,
      footerData :  footer.data[0]

    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const object = {
    paths: [],
    fallback: 'blocking'
  };
  const data = await fetch(`https://cgsapi.herokuapp.com/api/posts/?populate=*`);
  const parsedData = await data.json();

  parsedData.data.map((e, i) => {
    object.paths.push({
      params: {
        id: `${e.id}`,
      },
    });
  });
  return object;
}

export default Id;
