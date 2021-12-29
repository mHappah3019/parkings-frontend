class FilterBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleSchoolFilterChange = this.handleSchoolFilterChange.bind(this);
      this.handleSecurityLevelChange = this.handleSecurityLevelChange.bind(this);
    }
    
  
    handleSchoolFilterChange(e) {
      this.props.onSchoolFilterChange(e.target.value);
    }
    
    handleSecurityLevelChange(e) {
      this.props.onSecurityLevelChange(e.target.value);
    }
  
    
    render() {
      
      return (
        <div> 
        <form id="filterBar">
          <input
            id='schoolInput'
            type="text" 
            placeholder="Search by school..."
            value={this.props.schoolFilter}
            onChange={this.handleSchoolFilterChange} 
          />
        </form>
        </div>
      )
    }
  }