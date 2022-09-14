
import * as React from "react"
import PropTypes from "prop-types"

import circle_row from "../images/circle_row_white.svg"

const Header = () => (
    <section className="showcase flex flex--jc--center flex--center flex--wrap pt-20">
        <div className="content">
            <div className="flex flex--center w--100 h--100">
                <div className="flex flex--col pl-12 w--50">
                    <div className="type type--color--white type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">Discover, explore and win.</div>
                    <div className="type type--md type--lh-15 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Litr,  Lorem Ipsum Dolor Sit Amet, Consetetur.</div>
                    <div className="flex w--100 mt-3">
                        <div className="btn btn--primary mr-3 pl-6 pr-6 pt-3 pb-3">Get on AppStore</div> 
                        <div className="btn btn--ghost btn--ghost--white pl-6 pr-6 pt-3 pb-3">Get on PlayStore</div>
                    </div>
                    <div className="mt-20 w--50">
                        <img src={circle_row} alt="sunscreen" />
                    </div> 
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