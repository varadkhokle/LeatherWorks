import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import { graphql } from "gatsby"


const IndexPage =({data})=>{


return (
    <Layout>
     <Seo title="Home"/>
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="I write a code"
     subtitle="LeatherWorks.in"
     heroclass="hero-background"
     />
     <InfoBlock heading="About us"></InfoBlock>
     <DualInfoBlock heading="OUR TEAM"/>
    </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const query=graphql`
{
    img: file(relativePath: {eq: "leatherBackg.jpg"}){
        childImageSharp {
            fluid{
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`
export default IndexPage
