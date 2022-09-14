import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Showcase from "../components/showcase"
import Review from "../components/review"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Showcase />
    <Review />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
