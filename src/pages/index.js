/* global graphql */

import React from 'react';
import ResumeSection from '../components/resume-section';

const IndexPage = ({ data }) => {
  const resumeData = data.allDataJson.edges.find(edge => !!edge.node.resume);

  return (<main>
    {resumeData.node.resume.map(section =>
      (<ResumeSection data={section} theme={section % 2 ? 'light' : 'dark'} />))}
  </main>);
};

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
              description
            }
          }
        }
      }
    }
  }
`;
