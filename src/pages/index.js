import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Showcase from "../components/showcase"
import Review from "../components/review"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Avantourist" />
    <Hero />
    <About />
    <Showcase />
    <Review />
  </Layout>
)

export const Head = () => <Seo title="Avantourist" />

export default IndexPage
