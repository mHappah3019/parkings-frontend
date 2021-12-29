import {Collapse, List, ListItem} from '@mui/material'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';

import React from 'react';

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

export default ParkingDiv;