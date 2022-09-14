
import * as React from "react"
import PropTypes from "prop-types"

import avatar from "../images/avatar.png"
import stars from "../images/stars.svg"
import traveler from "../images/traveler.png"

const Review = () => (
    <section className="review flex flex--jc--center flex--center flex--wrap pt-20">
        <div className="content">
            <div className="flex flex--center w--100 h--100">
                <div className="flex flex--col pl-12 w--50 text">
                    <div className="type type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">See what our users have to say about our app.</div>
                    <div className="type type--md type--lh-15 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet Consetetur.</div>
                </div>
                <div className="flex flex--col pr-12 w--50">
                    <div className="review">
                        <div className="user flex flex--center">
                            <div className="avatar">
                                <img src={avatar} alt="avatar"/>
                            </div>
                            <div className="flex pl-6 flex--col flex--jc--center">
                                <div className="type type--md type--wgt--bold">John Doe</div>
                                <div className="type type--color--tertiary">AppStore user</div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <img src={stars} alt="avatar"/>
                        </div>
                        <div className="type type--md type--lh-15 type--color--tertiary  mb-5">Lorem Ipsum Dolor Sit Amet, Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet Consetetur. Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet Consetetur Sed Diam Nonumy Eirmod Tempo Lorem Ipsum Dolor Sit Amet Consetetur. </div>
                    </div>
                </div>
            </div>
            <div className="download flex flex--center w--100 h--100 mt-20 p-12">
                <div className="flex flex--col pr-12 w--50">
                    <div className="type type--xxl type--lh-1 type--color--white type--wgt--bold mb-5">Download and start exploring now.</div>
                    <div className="flex mt-6">
                        <div className="type type--wgt--bold btn btn--primary flex flex--center flex--jc--center mr-4 pl-6 pr-6 pt-3 pb-3">Get on AppStore</div> 
                        <div className="type type--wgt--bold btn btn--ghost btn btn--ghost--white flex flex--center flex--jc--center pl-6 pr-6 pt-3 pb-3">Get on PlayStore</div>
                    </div>
                </div>
                <div>
                    <img className="w--100" src={traveler} alt="traveler explorer tourist"></img>
                </div>
            </div>
        </div>
    </section>
)

Review.propTypes = {
  siteTitle: PropTypes.string,
}

Review.defaultProps = {
  siteTitle: ``,
}

export default Review