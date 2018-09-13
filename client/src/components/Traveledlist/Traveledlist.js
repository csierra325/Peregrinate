import React, {Component} from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import API from "../../utils/API";
import ListItem from "../../components/ListItem"

class Traveledlist extends Component {
  state = {
    currentPage: "WishList",
    id: window.id,
    userID: window.id,
    selectedCity: "",
    selectedCities: [],
  };

  componentDidMount(){
    API.getUser(window.id) 
    .then(res => {
      const dbTraveledlist = res.data;
     dbTraveledlist.traveledlist.forEach(element => {
      this.state.selectedCities.push(element)         
     });
    }).catch(err => console.log(err));
  } 

  delete(city){
    const selectedCities = this.state.selectedCities.filter(i => i !== city)
    this.setState({selectedCities})
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    API.updateUser(window.id, {$push:{traveledlist: this.state.selectedCity }})
      .then(res => {
        API.getUser(window.id) 
        .then(res => {
          this.setState({
            selectedCities: [...this.state.selectedCities, this.state.selectedCity]
         });
        }).catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    window.id = this.state.id;
    return (
        <div className = "wishListWrapper">
          <h2>Traveled List: </h2>
          <div className="cities">
          <label htmlFor="choosing-cities">Pick A State</label>

          <Dropdown
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            currentValue={this.state.selectedCity}
          />
        
          <br/>

          <ul>
            {this.state.selectedCities.map((city, i) => (
              <ListItem key={i} text={city} onDelete = {() => this.delete(city)}  />
            ))} 
          </ul>
        </div>
      </div>
    );
  }
}

export default Traveledlist;

