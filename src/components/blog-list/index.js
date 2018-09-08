import React from 'react';

import './_blog-list.scss';

const BlogList = ({ data }) => (
  <section className="blog-list">
    <div className="container">
      <h2>Technical Writing</h2>
      {data.map((post) => {
        const MediumLink = ({ children }) => (
          <a
            href={`https://medium.com/${process.env.MEDIUM_USER}/${post.uniqueSlug}`}
            target="_blank"
          >{children}</a>);

        return (
          <article key={post.uniqueSlug} className="post">
            {post.virtuals.previewImage.imageId
              ? <MediumLink>
                <img
                  src={`https://miro.medium.com/max/200/${post.virtuals.previewImage.imageId}`}
                  alt={post.title}
                />
              </MediumLink>
              : null}
            <div className="text">
              <MediumLink>
                <h6>{post.title}</h6>
              </MediumLink>
              <p>{post.virtuals.subtitle}</p>
              <time>{post.createdAt}</time>
            </div>
          </article>);
      })}
    </div>
  </section>
);

export default BlogList;
