import React from 'react';
import { Link } from 'gatsby';
import './_footer.scss';

const Footer = ({ siteStructure, links }) =>
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
        <div className="col-2">
          <h6>Site</h6>
          <ul>
            {
              siteStructure.map(({ relPath, label }) =>
                (<li><Link to={relPath}>{label}</Link></li>)
              )
            }
          </ul>
        </div>
        <div className="col-4">
          <h6>External Links</h6>
          <ul>
            {
              links.map(({ url, name, icon }) =>
                (<li><a href={url} target="_blank"><i className={`icon-${icon}`} />{name}</a></li>)
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
