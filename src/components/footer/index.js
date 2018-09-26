import React from 'react';
import { Link } from 'gatsby';
import './_footer.scss';

const Footer = ({ siteStructure }) =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="footer-content left-align">
            <small>
              <h1>Brian Lee</h1>
              <h2>Software Engineer</h2>
            </small>
          </div>
        </div>
        <div className="col-3">
          <h6>Site</h6>
          {
            siteStructure.map(({ relPath, label }) =>
              (<Link to={relPath}>{label}</Link>)
            )
          }
        </div>
        <div className="col-3">

        </div>
      </div>
    </div>
  </footer>);

export default Footer;
