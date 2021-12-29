class ParkingDiv extends React.Component {
    render() {
      const parking = this.props.parking;
      const surveillance_color = this.props.surveillance_color;
      return (
        <div style={{background:'white', margin:'5px'}}> {/* TODO: remove */}
        <ListItem>
          <List style={{background:'lightgreen'}}>
            <ListItem disablePadding className='mildSpacing updown' style={{background:'red'}}>
              <LocationOnSharpIcon style={{background:'yellow'}}/>
              <p className='mildSpacing sides'>{parking.address}</p>
            </ListItem>
            <ListItem className='mildSpacing updown' disablePadding>
              <SchoolTwoToneIcon/>
              <p className='mildSpacing sides'>{parking.school}</p>
            </ListItem>
            <ListItem className='mildSpacing updown' disablePadding>
              <EmojiPeopleSharpIcon/>
              <p className='mildSpacing sides'>{parking.players}</p>
            </ListItem>
            <div className='mildSpacing' id='infoIcons'>
              <VisibilityIcon color={surveillance_color} fontSize='small'/>
            </div>
          </List>
        </ListItem>
        </div>
      )
    }
  }