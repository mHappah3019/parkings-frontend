
class ParkingsList extends React.Component {
    render() {
      const schoolFilter = this.props.schoolFilter;
      const securityLevel = this.props.securityLevel;
  
      const elements = [];
      const unInterestingElements = [];
      let surveillance_color = "";
  
      this.props.parkings.forEach((parking) => {
  
        switch(parking.surveillance_efficiency) {
          case "RED":
            surveillance_color = "error";
            break;
          case "YELLOW":
            surveillance_color = "warning";
            break;
          case "GREEN":
            surveillance_color = "success";
            break;
          default:
            surveillance_color = "primary";
            break;
        }
  
        if (parking.school.toUpperCase().indexOf(schoolFilter.toUpperCase()) === -1){
          unInterestingElements.push(
            <ParkingDiv
            parking={parking}
            key={parking.address}
            surveillance_color={surveillance_color}
            />
          )
          return;
        }
      /*   if (parking.rating < securityLevel) {
          unInterestingElements.push(
            <ParkingDiv
            parking={parking}
            key={parking.address} />
          )
          return;
        } */
  
        elements.push(
          <ParkingDiv
            parking={parking}
            key={parking.address}
            surveillance_color={surveillance_color}
          />
        )
      });
  
      return (
        <div style={{background:'yellow', padding:"10px"}}>
        <List>
          {elements}
          {unInterestingElements}
        </List>
        </div>
      );
    }
  }