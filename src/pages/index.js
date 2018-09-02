/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import ResumeSection from '../components/resume-section';

const IndexPage = props =>
  (<main>
    {props.data.allDataJson.edges[0].node.resume.map(section =>
      (<ResumeSection data={section} theme={section % 2 ? 'light' : 'dark'} />))}
    <Features data={props.data.allDataJson.edges[0].node.features} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          resume {
            section
            items {
              company
              location
              position
            }
          }
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
