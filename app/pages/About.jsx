import React from 'react'
import { Helmet } from 'react-helmet'

import { Fade } from 'react-reveal'

import '../styles/n0-x.styles.scss'

const About = () => (
<div className='content'>
  <Helmet><title>About Us</title></Helmet>
  <div className='logo-bg'>
    <div className='bg-tint bg-content'>
      <div className='nox-12 p-5 info-bg'>

        <h1 className='heading mb-4'>About Us</h1>

        <div className='text'>
          Alkenox Media & Entertainment is an independent media production company, officially founded in 2018 in the greater Atlanta area. We tailor our work to provide custom, high-quality, professional digital media services to our clients. Due to this, we offer all of our services a-la-cart or via custom bundling.
        </div>

        <div className='text'>
          We are a family business and our clients are an extension of our family, as are the members of our team. We will go above and beyond to ensure our family's satisfaction.
        </div>

      </div>
    </div>
  </div>
</div>
)

export default About
