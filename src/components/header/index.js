import React from 'react';

import './_header.scss';

const Header = ({ links }) =>
  (<header className="header">
    <div className="container">
      <div className="row no-gutters align-items-end">
        <div className="col-lg-8">
          <div className="row header-content">
            <div className="col">
              <h1>Brian Lee</h1>
              <h2>Software Engineer</h2>
              <h4 className="gray">Phoenix >> Seoul >> New Jersey >> Chicago >> <span className="black">Seattle</span> >></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <nav className="header-nav">
            <ul className="header-nav-list">
              {links.map(link =>
                (<li className="header-nav-list-item" key={link.name}>
                  <a href={link.url} target="_blank">
                    <i className={`icon-${link.icon}`} />
                  </a>
                </li>))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="row no-gutters justify-content-end">
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <a href="/">About</a>
            </li>
            <li className="header-nav-list-item">
              <a href="/works">Works</a>
            </li>
            <li className="header-nav-list-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>);

export default Header;
