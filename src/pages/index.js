/* global graphql */

import React from 'react';
import HeroSection from '../components/hero-section';
import ResumeSection from '../components/resume-section';

const IndexPage = ({ data }) => {
  const resumeData = data.allDataJson.edges.find(edge => !!edge.node.resume);

  return (<main>
    <HeroSection />
    {resumeData.node.resume.map((section, i) =>
      (<ResumeSection data={section} theme={i % 2 ? 'dark' : 'light'} />))}
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
              startDate
              endDate
            }
          }
        }
      }
    }
  }
`;
