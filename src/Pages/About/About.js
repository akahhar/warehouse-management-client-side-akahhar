import React from 'react'
import { Link } from 'react-router-dom'
import About_company from '../../images/About_company.jpg'
export default function About() {
  return (
    <div className='about pt-5'>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-6">
                    <div className="about-left mb-3">
                        <img src={About_company} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="section-title mb-3 pt-5">
                        <h2>Discover, Collect & Sell Extraordinary Laptops</h2>
                        <p>The Electo House is a high-quality collection of 100 unique products on the marketplace.</p>
                        <Link to="/home" className='btn'>Discover</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
