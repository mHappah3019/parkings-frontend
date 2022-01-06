import React from 'react';

class Description extends React.Component {
    render() {
      const whyItWorks = "Affiliated shops are either coffee bars or stores that will guarantee surveillance over the bike parkings nearby. When a alarmed bike-lock goes off, they will make sure your bike is safe. The shop staff can then keep working without much struggle, keeping their ears open will be enough.";
      return (
        <div className="textContent leftPadding">
          <h2 className="headers">
            What for
          </h2>
          <p className='mildSpacing'>
            {whyItWorks}
          </p>
        </div>
  
      )
    }
  }

export default Description;