import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="header-content">
            <h1>
              Brian Lee
            </h1>
            <h2>
              Software Engineer
            </h2>
          </div>
        </div>
        <div className="col-lg-4">
          <nav className="header-nav">
            <ul className="header-nav-list">

              <li className="header-nav-list-item">
                <a href="/">About</a>
              </li>
              <li className="header-nav-list-item">
                <a href="/works">Works</a>
              </li>
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
