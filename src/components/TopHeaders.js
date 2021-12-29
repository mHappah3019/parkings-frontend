class TopHeaders extends React.Component {
    render() {
      return (
        <div>
          <div className="row">
            <div className="column left">
              <h1 className="headers" id="titleHeader">Rock-A-<span id='headerPop'>Ride</span></h1>
            </div> 
            <div className="column right">
              <h5 id='subHeader' className="headers italic mildSpacing sides">
                {this.props.problem_description}
              </h5>
            </div>
          </div>
        </div>
      )
    }
  }