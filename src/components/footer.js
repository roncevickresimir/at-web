import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
//import tiktok from "../images/tiktok.svg"
import twitter from "../images/twitter.svg"

const pages = [
    {
        path: "/privacy",
        title: "Privacy Policy",
    },
    {
        path: "/terms",
        title: "Terms & Conditions",
    },
    {
        path: "/legal",
        title: "Legal",
    },
    {
        path: "/contact",
        title: "Contact Us",
    },
]

const Footer = () => (
  <footer className="flex flex--col flex--center flex--jc--space-between pt-16 pb-8">

    <div className="flex flex--center flex--jc--center w--100">
    {pages.map( page => {
        return (
            <Link to={page.path} className="mr-4" >{page.title}</Link>
        )
        })
    }
    </div>

    <div className="type type-md w--50 mt-8 type--center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. t vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
    
    <div className="flex mt-8">
        <Link to="facebook" className="mr-4"><img src={facebook}></img></Link>
        <Link to="instagram" className="mr-4"><img src={instagram}></img></Link>
        {/* <Link to="tiktok" className="mr-4"><img src={tiktok}></img></Link> */}
        <Link to="twitter"><img src={twitter}></img></Link>
    </div> 

    <div className="type">©  AvanTourist &middot; {new Date().getFullYear()}</div>    
  </footer>
)

export default Footer
