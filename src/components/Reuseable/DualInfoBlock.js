import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
export default function DualInfoBlock({heading}) {
  return (
    <section className='my-4 py-4 bg-theme'>
   <div className='container'>
      <Heading title={heading}/>
      <div className='row'>
        <div className='col-8 mx-auto'>
           <p className='lead text-white mb-5'>
           Hand Feature is handmade Leather goods brand, All of our goods are created by handmade. 
Always trying to do satisfy to our respected customer. 
I am thinking customer like a god, so customer should be happy with our product. 
Behind the brand is the visionary creative force of Srikant Tiwari the Founder and Creative Director of Hand Featur.

Thanks to visit our site

           </p>
        </div>
        <div className='col-4'>
        <div className="card" >
  <img src="..." class="card-img-top" alt="image goes here"/>
  <div className="card-body">
    <h5 className="card-title">Just Click Photos</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="#" className="btn btn-warning btn-block">{heading}</Link>
  </div>
</div>

            </div>

      </div>

   </div>

    </section>
  )
}
