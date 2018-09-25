import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../header';
import Footer from '../footer';

import '../../../sass/style.scss';

const TemplateWrapper = ({ children }) => (<StaticQuery
  query={graphql`
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
  `}
  render={(data) => {
    const links = data.allDataJson.edges.find(edge => !!edge.node.links);
    return (<div>
      <Helmet
        title="Brian Lee"
      />
      <Header links={links.node.links} />
      {children}
      <Footer />
    </div>);
  }}
/>);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
