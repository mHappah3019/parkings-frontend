import React from 'react';

class UserGuide extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const howItWorks1 = "Avverti che stai parcheggiando la tua bicicletta.";
      const howItWorks2 = "Parcheggi e allucchetti la tua bicicletta.";
      const howItWorks3 = "Il miglior modo per rendere efficace il sistema è munendosi di un buon lucchetto con allarme. Le attività possono quindi continuare a lavorare al solito ritmo senza dover attivamente sorvegliare nessuna bicicletta.";
      return (
        <div className="content steps leftPadding">
          <h3 className="headers">
            How
          </h3>
          <p>
      
            {howItWorks1}<br></br>
            {howItWorks2}<br></br>
            {howItWorks3}
  
          </p>
        </div>
      )
    }
  }

export default UserGuide;