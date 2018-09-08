import React from 'react';

import './_resume-section.scss';

const ResumeSection = ({ data, theme }) =>
  (<section className={`${theme} resume`}>
    <div className="container">
      <h2>{data.section}</h2>
      {data.items.map(item =>
        (<div className="col" key={item.start}>
          <div className="row">
            <h4 className="position">{`${item.position}: `}</h4>
            <h4 className="serif-accent">
              {`${item.company} – ${item.location}`}
            </h4>
          </div>
          <div>
            <time>{`${item.start}${item.end ? ` – ${item.end}` : ''}`}</time>
          </div>
          <ul>
            {item.description
              ? item.description.map(detail => (<li>{detail}</li>))
              : null
            }
          </ul>
        </div>))}
    </div>
  </section>);

export default ResumeSection;
