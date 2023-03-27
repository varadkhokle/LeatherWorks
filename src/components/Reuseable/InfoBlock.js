import React from "react"
import heading from "./Heading"
import { Link } from "gatsby"
import Heading from "./Heading"
export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />

        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
            Hand Feature is handmade Leather goods brand, All of our goods are created by handmade. 
Always trying to do satisfy to our respected customer. 
I am thinking customer like a god, so customer should be happy with our product. 
Behind the brand is the visionary creative force of Srikant Tiwari the Founder and Creative Director of Hand Featur.

Thanks to visit our site
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">
                {heading}

              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
