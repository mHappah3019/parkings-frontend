import React from 'react';

class TopHeaders extends React.Component {
    render() {
      const problemDescription = 'Solving bicycle theft with a people-first approach';
      return (
        <div id="topHeader">
          <div className="row">
            <div className="column left mildSpacing">
              <h1 className="headers" id="titleHeading">spazi-per-pedalare</h1>
            </div> 
          </div>
        </div>
      )
    }
  }

export default TopHeaders;