/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children, data }) => {
  const links = data.allDataJson.edges.find(edge => !!edge.node.links);
  return (<div>
    <Helmet
      title="Brian Lee"
    />
    <Header links={links.node.links} />
    {children()}
    <Footer />
  </div>);
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const linkQuery = graphql`
  query linksQuery {
    allDataJson {
      edges {
        node {
          links {
            name
            url
            icon
          }
        }
      }
    }
  }
`;