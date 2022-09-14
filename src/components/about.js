
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import circle_row from "../images/circle_row.svg"
import screen_in_circle_1 from "../images/screen_in_circle_1.svg"
import screen_in_circle_2 from "../images/screen_in_circle_2.svg"

import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
    <section className="about flex flex--jc--center flex--center flex--wrap pt-20">
      <div className="content">
        <div className="text flex flex--center flex--jc--center w--100">
          <div className="flex flex--col pl-12 w--50">
              <div>
                  <img src={circle_row} alt="sunscreen" />
              </div>
              <div className="type type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">Discover, explore and win.</div>
              <div className="type type--md type--lh-15 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr,  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr, </div>
          </div>
          <div className="content__desktop w--50 pl-20 pr-20">
              <img src={screen_in_circle_1} alt="sunscreen" className="w--100"/>
          </div>
        </div>

        <div className="content__mobile flex">
          <img src={screen_in_circle_1} alt="app screen" className="w--100"/>
          <img src={screen_in_circle_2} alt="app screen" />
        </div>

        <div className="text flex flex--center flex--jc--center w--100">
          <div className="content__desktop w--50 pl-20 pr-20">
              <img src={screen_in_circle_2} alt="passport" />
          </div>
          <div className="flex flex--col pr-12 w--50">
              <div>
                  <img src={circle_row} alt="sunscreen" />
              </div>
              <div className="type type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">Discover, explore and win.</div>
              <div className="type type--md type--lh-15 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr,  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr, </div>
          </div>
        </div>
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