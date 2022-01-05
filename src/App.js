import logo from './logo.svg';
import './App.css';

import TopHeaders from './components/TopHeaders'
import Description from './components/Description'
import UserGuide from './components/UserGuide'
import FilterableParkingsList from './components/FilterableParkingList'
import OutroParag from './components/OutroParag'

import { Component } from 'react';

import axios from 'axios';


class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      parkings: []
    };
  }


  componentDidMount() {
    this.refreshList();
  }


  refreshList = () => {
    axios
      .get('http://127.0.0.1:8000/api/get-data/') /* TODO: fix */
      .then((res) => this.setState({parkings: res.data}))
      .catch((err) => console.log(err));
  };



  render() {
    const mainProps = { // make sure all required component's inputs/Props keys&types match
      parkings: this.state.parkings
    }

    return(
      <div id="app">
        <div className="content">
          <TopHeaders/>
          <Description/>
          <UserGuide/>
          <FilterableParkingsList
            {...mainProps}/>
        </div>
        <div className="footer"><OutroParag/></div>
      </div>
      
    );
  }
}

export default App;
