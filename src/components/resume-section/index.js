import React from 'react';

import './_resume-section.scss';

const ResumeSection = ({ data, theme }) =>
  (<section className={`${theme} resume`}>
    <h2>{data.section}</h2>
    <ul>
      {data.items.map((item, i) =>
        (<li key={i}>
          <div>
            <h4 className="serif-accent">{item.company}</h4>
            <span>{item.location}</span>
          </div>
        </li>))}
    </ul>
  </section>);

export default ResumeSection;
