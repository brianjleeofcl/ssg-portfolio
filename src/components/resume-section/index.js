import React from 'react';

import './_resume-section.scss';

const ResumeSection = ({ data, theme }) =>
  (<section className={`${theme} resume`}>
    <div className="container">
      <h3>{data.section}</h3>
      {data.items.map(item =>
        (<div className="col" key={item.start}>
          <div className="row">
            <h4 className="position">{`${item.position}: `}</h4>
            <h4>
              {`${item.company} – ${item.location}`}
            </h4>
          </div>
          <div>
            <h6>{`${item.startDate}${item.endDate ? ` – ${item.endDate}` : ''}`}</h6>
          </div>
          <ul>
            {item.description
              ? item.description.map((detail, i) => (<li key={`${item.position}-${i}`}>{detail}</li>))
              : null
            }
          </ul>
        </div>)
      )}
    </div>
  </section>);

export default ResumeSection;
