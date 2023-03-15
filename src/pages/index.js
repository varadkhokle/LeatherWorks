import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import HeroSection from "../components/Reuseable/HeroSection"


const IndexPage =()=>{


return (
    <Layout>
     <Seo title="Home"/>
     <HeroSection
     title="I write a code"
     subtitle="LeatherWorks.in"
     heroclass="hero-background"
     />
    </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


export default IndexPage
