import React from 'react';
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
            siteStructure {
              relPath
              label
            }
          }
        }
      }
    }
  `}
  render={(data) => {
    const links = data.allDataJson.edges.find(edge => Boolean(edge.node.links));
    const siteStructure = data.allDataJson.edges.find(edge => Boolean(edge.node.siteStructure));
    return (<div>
      <Helmet
        title="Brian Lee"
      />
      <Header links={links.node.links} siteStructure={siteStructure.node.siteStructure} />
      {children}
      <Footer />
    </div>);
  }}
/>);

export default TemplateWrapper;
