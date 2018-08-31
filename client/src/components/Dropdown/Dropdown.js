import React, { Component } from "react";
import { getCities } from "../../utils/API";


export default class Dropdown extends Component {
  state = {
    location: []
  };

  componentDidMount() {
    
    getCities()
    // let city = data.data.data.[0]
    
      .then(res =>  {
        
        console.log("im here", res);
        console.log("res.data[i]: ",  res.data[0].city);
         const cities = res.data.map(data => data.city);
         console.log("cities map:", cities);
         this.setState({location: cities})
         
          
      })
      // .then(res => this.setState({location: res.data.city}))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // locationItem = event => {
  //   event.preventDefault();
  //   const { locationItem } = this.state;

  //   if (locationItem) {
  //     this.setState({
  //       cities: [locationItem]
  //     });
  //   }
  // };

  render() {
    return (
      <div className="Dropdown">
        <h2>Choose a location:</h2>
        {/* <input
          list="locations"
          onChange={this.handleInputChange}
          id="location-choice"
          name="location-choice"
        />

        <datalist id="locations">
          {/* <option value="Chocolate" /> */}
          
          {/* {this.state.location.map((locationItem, i) => (
         <option key={i} value={locationItem}>{locationItem}</option>
        ))}
        </datalist> */}
        <select>
{this.state.location.map((locationItem, i) => (
  <option key={i} value={locationItem}>{locationItem}</option>
 ))}

        </select>
      </div>
    );
  }
}
