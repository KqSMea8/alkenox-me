// Dead simple component for the hello world (hi mom!)

import React from 'react'
import { Helmet } from 'react-helmet'

import { Fade } from 'react-reveal'

import Header from '../components/Header'


import '../styles/n0-x.styles.scss'

const Home = () => (
  <span>
    <Helmet><title>alkenox-me</title></Helmet>
    <Header />

  </span>
)

export default Home
