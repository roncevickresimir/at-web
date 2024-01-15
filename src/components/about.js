import * as React from "react";
import PropTypes from "prop-types";

import circle_row from "../images/circle_row.svg";
import screen_in_circle_1 from "../images/screen_in_circle_1.svg";
import screen_in_circle_2 from "../images/screen_in_circle_2.svg";

const Header = () => (
  <section className="about flex flex--jc--center flex--center flex--wrap pt-20">
    <div className="content">
      <div className="text flex flex--center flex--jc--center w--100">
        <div className="flex flex--col pl-12 w--50">
          <div>
            <img src={circle_row} alt="circle" />
          </div>
          <div className="type type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">
            Adventure Travel Reimagined
          </div>
          <div className="type type--md type--lh-15 type--color--tertiary  mb-5">
            At AvanTourist, our mission is to revolutionize the way people
            travel. We believe that every trip should be an exciting and
            memorable adventure, and we've created our app to help make that
            happen.
          </div>
        </div>
        <div className="content__desktop w--50 pl-20 pr-20">
          <img src={screen_in_circle_1} alt="circle" className="w--100" />
        </div>
      </div>

      <div className="content__mobile flex">
        <img src={screen_in_circle_1} alt="circle" className="w--100" />
        <img src={screen_in_circle_2} alt="circle" />
      </div>

      <div className="text flex flex--center flex--jc--center w--100">
        <div className="content__desktop w--50 pl-20 pr-20">
          <img src={screen_in_circle_2} alt="passport" />
        </div>
        <div className="flex flex--col pr-12 w--50">
          <div>
            <img src={circle_row} alt="circle" />
          </div>
          <div className="type type--xxl type--lh-1 type--color--primary type--wgt--bold mb-5">
            Unlock Your Travel Potential
          </div>
          <div className="type type--md type--lh-15 type--color--tertiary  mb-5">
            Our app features a wide range of quests and activities that you can
            take on as you explore new destinations. From scavenger hunts to
            cultural experiences, there's always something new and exciting to
            discover. Plus, as you complete quests and earn points, you'll
            unlock rewards and benefits that make your travels even more
            rewarding.
          </div>
        </div>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
