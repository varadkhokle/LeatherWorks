/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Reuseable/Footer"
import Navbar from "./Reuseable/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  

  return (
    <> 
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
