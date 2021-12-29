import {Collapse, List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import {ExpandLess, ExpandMore, EmojiPeopleSharpIcon, SchoolTwoToneIcon, LocationOnSharpIcon, DirectionsRunIcon, VisibilityIcon} from '@mui/icons-material'

import React from 'react';


class Legenda extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        open:false,
      };
      this.handleClick = this.handleClick.bind(this)
    }
  
  
    handleClick() {
      this.setState({
        open: !(this.state.open)
      });
    }
  
    render() {
      return(
        <div className="mildSpacing">
  
          <ListItemButton id='legendaButton' onClick={this.handleClick}>
            <ListItemText primary="Legenda" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
  
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List>
              <ListItem>
              <LocationOnSharpIcon/><ListItemText primary=": Where to park@" />
              </ListItem>
              <ListItem>
              <SchoolTwoToneIcon/><ListItemText primary=":  Self-explanatory" />
              </ListItem>
              <ListItem>
              <EmojiPeopleSharpIcon/><ListItemText primary=": Who's looking out for your bike" />
              </ListItem>
              <ListItem>
              <VisibilityIcon/><ListItemText primary=": Surveillance efficency" />
              </ListItem>
            </List>
          </Collapse>
  
        </div>
        
      );
    }
  }