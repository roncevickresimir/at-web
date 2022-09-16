
import * as React from "react"
import PropTypes from "prop-types"

import hero_1 from "../images/hero_1.png"
import hero_2 from "../images/hero_2.png"
import hero_3 from "../images/hero_3.png"
import hero_4 from "../images/hero_4.png"
import hero_5 from "../images/hero_5.png"
import hero_6 from "../images/hero_6.png"
import hero_big from "../images/hero_big.png"

const Header = () => (
    <section className="hero">
      <div className="content">
        <div className="hero--text">
          <div className="type type--huge type--lh-1 type--color--primary type--wgt--bold mb-5">Discover, explore and win.</div>
          <div className="type type--md type--lh-2 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr, Consetetur</div>
          <div className="flex w--100 mt-3">
              <div className="btn btn--primary mr-3 pl-8 pr-8 pt-3 pb-3">Get on AppStore</div> 
              <div className="btn btn--ghost pl-8 pr-8 pt-3 pb-3">Get on PlayStore</div>
          </div>
        </div>
        <img className="hero--image image-1" src={hero_1} alt="sunscreen" />
        <img className="hero--image image-2" src={hero_2} alt="floaty" />
        <img className="hero--image image-3" src={hero_3} alt="location marker" />
        <img className="hero--image image-4" src={hero_4} alt="beach" />
        <img className="hero--image image-5" src={hero_5} alt="compass" />
        <img className="hero--image image-6" src={hero_6} alt="passport" />
        <img className="hero--image image-big" src={hero_big}  alt="tourist explorer" /> 
      </div>
    </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header