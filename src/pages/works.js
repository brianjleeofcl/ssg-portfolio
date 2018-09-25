import React from 'react';
import { graphql } from 'gatsby';
import BlogList from '../components/blog-list';
import TemplateWrapper from '../components/layout';

const WorksPage = ({ data }) => (
  <TemplateWrapper>
    <main>
      <BlogList data={data.allMediumPost.edges.map(({ node }) => node)} />
    </main>
  </TemplateWrapper>);

export default WorksPage;

export const worksQuery = graphql`
  query WorksQuery {
    allMediumPost {
      edges {
        node {
          uniqueSlug
          title
          createdAt(formatString: "MMM Do, YYYY")
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`;
