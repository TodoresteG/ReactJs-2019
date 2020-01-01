import React from 'react';
import './App.css';

import streetsData from './data/streets.json';

import Street from './Street/Street';
import House from './House/House';
import HouseDetails from './HouseDetails/HouseDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      streets: streetsData,
      selectedStreetIdx: 0,
      selectedHouseIdx: 0
    };
  }

  render() {
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {this.state.streets.map((street, idx) => {
            return (<Street 
                      location={street.location} 
                      key={idx} 
                      id={idx}
                      streetHoverEvent = {this.streetHoverEvent.bind(this)}
                    />)
          })}
        </div>
        <div className="houses">
          <h2>Houses</h2>
          {this.getSelectedStreet().map((home, idx) => {
            return (
              <House
                type={home.type}
                description = {home.description}
                imgUrl = {home.imgUrl}
                imgAlt = {home.imgAlt}
                price = {home.price}
                key = {idx}
                id = {idx} 
                houseHoverEvent = {this.houseHoverEvent.bind(this)}
              />
            );
          })}
        </div>
        <HouseDetails
          type = {this.getSelectedHouse().type}
          description = {this.getSelectedHouse().description}
          imgUrl = {this.getSelectedHouse().imgUrl}
          imgAlt = {this.getSelectedHouse().imgAlt}
          price = {this.getSelectedHouse().price}
          key = {this.state.selectedHouseIdx}
        />
      </div>
    );
  }

  getSelectedStreet() {
    return this.state.streets[this.state.selectedStreetIdx].homes;
  }

  getSelectedHouse() {
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx]
  }

  streetHoverEvent(idx) {
    this.setState({
      selectedStreetIdx: idx,
      selectedHouseIdx: 0
    })
  }

  houseHoverEvent(idx) {
    this.setState({
      selectedHouseIdx: idx
    })
  }
}

export default App;
