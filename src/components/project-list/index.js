import React from 'react';
import Img from 'gatsby-image';

import './_project-list.scss';

const ExternalLink = ({ children, url }) => (
  <a href={url} target="_blank">{children}</a>
);

const ProjectList = ({ data }) => (
  <section className="project-list">
    <div className="container">
      <h3>Personal Projects</h3>
      {data.map(project =>
        (<article key={project.name} className="post">
          {project.virtuals
            ? <ExternalLink>
              <img
                src={`https://miro.medium.com/max/200/${post.virtuals}`}
                alt={project.title}
              />
            </ExternalLink>
            : null}
          <div className="text">
            <h6>
              <ExternalLink url={project.url}>
                {project.name}
              </ExternalLink>
            </h6>
            <p>{project.description}</p>
            <time>{project.date}</time>
          </div>
        </article>))
      }
    </div>
  </section>
);

export default ProjectList;
