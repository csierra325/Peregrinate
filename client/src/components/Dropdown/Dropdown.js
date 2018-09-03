import React, { Component } from "react";
import { getCities } from "../../utils/API";


export default class Dropdown extends Component {
  state = {
      cities: [],
      searchedCities: []
  };

  componentDidMount() {
    
    getCities()
      .then(res =>  {
        this.setState({cities: res.data, searchedCities: res.data})
      })
      
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  render() {
   
    return (
      <div className="Dropdown">
        <h2>Choose a location:</h2>
       

       <div className="cities">
       <label htmlFor="choosing-cities">cities: </label>
       <input
        type="text"
        id="input-cities"
        list="options"
        onChange={e => {
          if(e.target.value.trim('') === '') {
            this.setState({searchedCities: this.state.cities})
          }
          //how to filter/search large datasets in javascript (search/sorting algorithims)
          const cities = this.state.cities.splice(0, 1000).filter(city => city.city.includes(e.target.value))
          this.setState({searchedCities: cities })
        }}/>
          <datalist id="options">
            { this.state.searchedCities.map((city) => (
            <option key={city._id}
              value={city.city}>
              {city.city}
          </option>
          ))}
          </datalist>
        </div>
        
      </div>
    );
  }
}
