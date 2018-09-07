import React from 'react';

import './_header.scss';

const Header = ({ links }) =>
  (<header className="header">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-lg-8">
          <div className="row header-content">
            <h1 className="col-auto">
              Brian Lee
            </h1>
            <h2 className="col-auto">
              Software Engineer – Seattle
            </h2>
          </div>
        </div>
        <div className="col-lg-4">
          <nav className="header-nav">
            <ul className="header-nav-list">
              {links.map(link =>
                (<li className="header-nav-list-item">
                  <a href={link.url} target="_blank">
                    <i className={`icon-${link.icon}`} />
                  </a>
                </li>))}
            </ul>
            <ul className="header-nav-list">
              <li className="header-nav-list-item">
                <a href="/">About</a>
              </li>
              <li className="header-nav-list-item">
                <a href="/works">Works</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>);

export default Header;
