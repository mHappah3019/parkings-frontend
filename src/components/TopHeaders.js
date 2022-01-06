import React from 'react';

class TopHeaders extends React.Component {
    render() {
      const problemDescription = 'Solving bicycle theft with a people-first approach';
      return (
        <div>
          <div className="row">
            <div className="column left">
              <h1 className="headers" id="titleHeader">Rock-A-<span id='headerPop'>Ride</span></h1>
            </div> 
          </div>
        </div>
      )
    }
  }

export default TopHeaders;