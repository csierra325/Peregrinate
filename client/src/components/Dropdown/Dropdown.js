import React, { Component } from "react";
import { getCities } from "../../utils/API";



export default class Dropdown extends Component {
  state = {
      cities: [],
      searchedCities: [],
      userID: window.id
  };

  componentDidMount() {
    getCities()
      .then(res =>  { 
        this.setState({cities: res.data, searchedCities: res.data})
   
      })
      .catch(err => console.log(err));
  }

  binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// binarySearch(searchedCities, city)

  render() {
   
    return (
      <div className="Dropdown">
        <h2>Wish List: </h2>
       <div className="cities">
       <label htmlFor="choosing-cities">Pick A State</label>
       <form onSubmit={this.props.handleSubmit}>
        <input
          name="selectedCity"
          id="input-cities"
          list="options"
          value={this.props.currentValue}
          onChange={this.props.handleInputChange}
        />
          <datalist id="options">
            {this.state.searchedCities.map((city, i) => (
              <option
                key={city._id}
                value={city.state_name}>
                {city.state_name}
              </option>
            ))}
            
          </datalist>
          <input type="submit" value="select" />
        
        </form>
         
        </div>  
      </div>
    );
  }
}
