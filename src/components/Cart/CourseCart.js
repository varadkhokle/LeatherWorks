import React, { Component } from 'react'

import Heading from '../Reuseable/Heading'
import Img from "gatsby-image"



export default class CourseCart extends Component {
    constructor (props)
    {
        super(props)
        this.state={
            products:props.products.edges,
            myproducts:props.products.edges,
        }
    }
  render() {
    console.log(this.state.products);
    
    return (
      <section className='py-5'>
        <div className='container'>
            <Heading title="Products" />
            <div className='row'>
                {this.state.myproducts.map(({node})=>{
                     return(
                        <div
                        key={node.id}
                        className="col-11 col-md-6 d-flex mx-auto"> 
                          
                          <img src={node.image.url} className="card h-25"  />
                          <div className='flex-grow-1 px-3'> 
                             <div className='d-flex justify-content-between'>
                                <h6 className='mb-0'>{node.title}

                                </h6>
                                <h6 className='mb-0 text-success'>₹{node.price}

                                </h6>

                                </div>
                                <p className="text-muted">
                                    <small>{node.description.description}</small>

                                </p>
                                <button className='btn btn-warning'>
                                    Add to Cart
                                </button>

                            </div>
                            
                        </div>
                     )
                })
            }

            </div>

        </div>

        </section>
    )
  } 
}
