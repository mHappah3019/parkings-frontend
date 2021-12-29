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
      .get("/api/get-data")
      .then((res) => this.setState({parkings: res.data}))
      .catch((err) => console.log(err));
  };



  render() {

    return(
      <div>
        <TopHeaders/>
        <Description/>
        <UserGuide/>
        <FilterableParkingsList
          parkings = {this.state.parkings}/>
        <OutroParag/>
      </div>
    );
  }
}

export default App;
