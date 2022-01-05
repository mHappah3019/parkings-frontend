import React from 'react';

class UserGuide extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const howItWorks1 = "Inform the staff that you're parking your bike.";
      const howItWorks2 = "Park and lock your bike.";
      const howItWorks3 = "WARNING: An alarmed bike-lock is highly suggested as it's now the safest measure.";
      return (
        <div className="textContent steps leftPadding">
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