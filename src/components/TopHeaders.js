import React from 'react';

class TopHeaders extends React.Component {
    render() {
      const problemDescription = 'Solving bicycle theft with a people-first approach';
      return (
          <div id="topHeader" className="row" /* style={{background:'red'}} */>
            <div className="column left" style={{width:'100%'/* , background:'orange' */}}>
              <h1 className="headers" id="titleHeading" /* style={{background:"yellow"}} */>hype-hype-hype</h1>
            </div> 
          </div>
      )
    }
  }

export default TopHeaders;