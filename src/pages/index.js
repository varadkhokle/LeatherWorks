import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"
import { graphql } from "gatsby"


const IndexPage =({data})=>{


return (
    <Layout>
     <Seo title="Home"/>
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="Website is under construction!!"
     subtitle="HandFeatures.in"
     heroclass="hero-background"
     />
     <InfoBlock heading="About us"></InfoBlock>

     <CourseCart products={data.products}/>
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
    products:allContentfulProducts{
        edges{
          node{
            id
        title
        price
        categry
        description {
          description
        }
        image{
          url
        }
           
          }
        }
      }
}
`
export default IndexPage

