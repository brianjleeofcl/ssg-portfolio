/* global graphql */
import React from 'react';
import BlogList from '../components/blog-list';

const WorksPage = ({ data }) => (
  <main>
    <BlogList data={data.allMediumPost.edges.map(({ node }) => node)} />
  </main>);

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
`
