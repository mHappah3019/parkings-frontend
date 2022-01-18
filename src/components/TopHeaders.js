import React from 'react';

class TopHeaders extends React.Component {
    render() {
      const problemDescription = 'Solving bicycle theft with a people-first approach';
      return (
          <div id="topHeader" className="row" /* style={{background:'red'}} */>
            <div className="column left" style={{/* , background:'orange' */}}>
              <h1 className="headers" id="titleHeading" /* style={{background:"yellow"}} */>Open Custody</h1>
            </div> 
          </div>
      )
    }
  }

export default TopHeaders;