import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


type Props = {
  
};

export const Footer = (props: Props) => {

  return (
    <footer className="footer_portfolio" id="footer-home">
      <img src="/assets/codeo.png" alt="logo_codeo_black" />
      <div className="footer_portfolio--contacts">
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="copyright">&copy; 2023 CODEO inc. Tous droits réservés</p>
    </footer>
  );
};
