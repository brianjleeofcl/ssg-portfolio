import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './_hero-section.scss';

const HeroSection = () => (<StaticQuery
  query={graphql`query HeroQuery {
    markdownRemark(frontmatter: {title: {eq : "hero"}}) {
      html
    }
  }`}
  render={
    (data) => {
      const html = data.markdownRemark.html;
      return (<section className="hero">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>);
    }
  }
/>);

export default HeroSection;
