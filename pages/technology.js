import React from 'react'
import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import Layout from '../components/Layout'
import Stickytop from '../components/Stickytop'
import Techno from '../components/Techno'
import Technologyhero from '../components/Technologyhero'

const Technologies = ({technologies,data,allTechs,footerData}) => {
  return (
    <div>
<Layout active={3} route="technology">
    <Technologyhero data={data}/>
    <Techno technologies={technologies} allTechs={allTechs}/>
     <FooterBanner/>
     <Footer footerData={footerData}/></Layout>
    </div>
  )
}



export const getStaticProps = async (context) => {
  const { locale } = context;

  let json = undefined;
  let footer = undefined;

  if (locale == "heb") {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks,all_technologies&locale=he-IL"
    );
     json = await res.json();
    const res3 =  await fetch("https://cgsapi.herokuapp.com/api/footers?populate=*&locale=he-IL");
     footer =  await res3.json();
  } else {
    const res = await fetch(
      "https://cgsapi.herokuapp.com/api/technologies?populate[0]=technologies.project_tech_stacks,all_technologies"
    );
     json = await res.json();
    const res3 =  await fetch("https://cgsapi.herokuapp.com/api/footers?populate=*");
     footer =  await res3.json();
  }

  return {
    props: {
      technologies: json.data[0].attributes.technologies,
    data: json.data[0].attributes,
    allTechs:json.data[0].attributes.all_technologies,
    footerData :  footer.data[0]
    },
  };
};

export default Technologies