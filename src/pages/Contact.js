import * as React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import { graphql } from "gatsby"


const AboutPage =({data})=>{


return (
    <Layout>
     <Seo title="Home"/>
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="I write a code"
     subtitle=""
     heroclass="about-background {
        "
     />
     <InfoBlock heading="A message from CEO"></InfoBlock>
     <DualInfoBlock heading="About our vision"/>
    </Layout>
)
}


export const query=graphql`
{
    img: file(relativePath: {eq: "Logo.jpg"}){
        childImageSharp {
            fluid{
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`
export default AboutPage
