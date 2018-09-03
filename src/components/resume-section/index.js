import React from 'react';

import './_resume-section.scss';

const ResumeSection = ({ data, theme }) =>
  (<section className={`${theme} resume`}>
    <div className="container">
      <h2>{data.section}</h2>
      {data.items.map((item, i) =>
        (<div className="col" key={i}>
          <div className="row">
            <h4 className="position">{`${item.position}: `}</h4>
            <h4 className="serif-accent">
              {`${item.company} – ${item.location}`}
            </h4>
          </div>
          <ul>
            {item.description.map(detail => (<li>{detail}</li>))}
          </ul>
        </div>))}
    </div>
  </section>);

export default ResumeSection;
