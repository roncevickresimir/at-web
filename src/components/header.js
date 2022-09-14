import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY || window.scrollY < 10) {
        setShow(true); 
      } else {
        setShow(false);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`${show ? 'show' : 'hide'}`}>
      <div className="flex flex--jc--space-between content">
        <Link
          to="/"
        >
          <div className="type type--lg type--wgt--bold type--color--primary">Avan<span className="type--wgt--bold type--color--secondary">Tourist</span></div>
        </Link>

        <div className="flex content__desktop">
          <div className="type type--wgt--bold btn btn--primary mr-4 pl-6 pr-6 pt-3 pb-3">Get on AppStore</div> 
          <div className="type type--wgt--bold btn btn--ghost pl-6 pr-6 pt-3 pb-3">Get on PlayStore</div>
        </div> 
        
        <div className="flex content__mobile">

        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
