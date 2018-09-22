/* global graphql */

import React from 'react';
import HeroSection from '../components/hero-section';
import ResumeSection from '../components/resume-section';
import ProjectList from '../components/project-list';
import TemplateWrapper from '../components/layout';

const IndexPage = ({ data }) => {
  const resumeData = data.allDataJson.edges.find(edge => !!edge.node.resume);
  const projectData = data.allDataJson.edges.find(edge => !!edge.node.projects);

  return (<TemplateWrapper>
    <main>
      <HeroSection />
      {resumeData.node.resume.map((section, i) =>
        (<ResumeSection data={section} theme={i % 2 ? 'dark' : 'light'} />))}
      <ProjectList data={projectData.node.projects} />
    </main>
  </TemplateWrapper>);
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
          projects {
            name
            description
            language
            keyTech
            repository
            url
          }
        }
      }
    }
  }
`;
