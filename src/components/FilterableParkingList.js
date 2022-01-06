import Legenda from './Legenda';
import FilterBar from './FilterBar';
import ParkingsList from './ParkingsList'

import React from 'react';


class FilterableParkingsList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        schoolFilter: '',
        securityLevel: 1
      };
      /* this.props = {
        divSize: 0
      }; */
  
      this.handleSchoolFilterChange = this.handleSchoolFilterChange.bind(this);
      this.handleSecurityLevelChange = this.handleSecurityLevelChange.bind(this);
    }
  
    handleSchoolFilterChange(schoolFilter) {
      this.setState({
        schoolFilter: schoolFilter
      });
    }
    handleSecurityLevelChange(securityLevel) {
      this.setState({
        securityLevel: securityLevel
      });
    }
  
    render () {
      return (
      <div className='gradient-background'>
        <FilterBar 
          schoolFilter={this.state.schoolFilter}
          securityLevel={this.state.securityLevel}
          onSchoolFilterChange={this.handleSchoolFilterChange}
          onSecurityLevelChange={this.handleSecurityLevelChange}
        />
        <Legenda/>
        <ParkingsList 
          parkings={this.props.parkings}
          schoolFilter={this.state.schoolFilter}
          securityLevel={this.state.securityLevel}
        />
      </div>
      );
    }
  }

export default FilterableParkingsList;