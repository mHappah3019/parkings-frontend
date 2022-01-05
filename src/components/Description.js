import React from 'react';

class Description extends React.Component {
    render() {
      const whyItWorks = "Le attività convenzionate sono locali o botteghe che mettono a disposizione le loro risorse umane per rendere i parcheggi di biciclette piu' sicuri. Al suono dell'allarme i responsabili interverranno chiamando le autorità";
      return (
        <div className="textContent leftPadding">
          <h2 className="headers">
            What for
          </h2>
          <p>
            {whyItWorks}
          </p>
        </div>
  
      )
    }
  }

export default Description;