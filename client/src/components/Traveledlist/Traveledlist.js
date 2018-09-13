import React, {Component} from "react";
import ListItem from "../ListItem";
import React, { Component } from "react";
import API from "../../utils/API";

class Traveledlist extends Component {
  state = {
    travels: [],
    travelItem: "",
    userID: window.id,
    id: window.id
  };

  componentDidMount() {
    API.getUser(window.id)
      .then(res => this.setState({ travels: res.data.traveledlist }))
      .catch(err => console.log(err));
  };

  getList = (travels, travelItem) => {
    // console.log(users_name);
    API.getTravelList(travels, travelItem)
        .then(res => {
          console.log(`travels from database: ${res.data[0].travels}`);
            console.log(`list items from database: ${res.data[0].travelItem}`);
        })
        .catch(err => console.log(err));
};

  handleInputChange = event => {
      const {name, value} = event.target;

      this.setState({
        [name]: value
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {travelItem, travels} = this.state;
    

    //This will go away once Camille is done
    if (travelItem){
      this.setState({
        travels: [travelItem, ...travels],
        travelItem: ""
      });
    }
  };


 render (){
   console.log( this.state.travels );
   return(
    <div className = "traveledList">
    <div className = "travelTitle">Traveled List</div>
      <input
      onChange = {this.handleInputChange}
       name = "travelItem"
       value = {this.state.travelItem}
       type="text"
      />
      <button disabled = {this.state.travelItem === ""} type="submit" value = "Submit" onClick = {this.handleSubmit}
      >Submit</button>
      <ul>
        {this.state.travels.map((travel, i) => (
            <ListItem key={i} text={travel} />  

        ))}
        </ul>
    </div>
   );
 }

} 

export default Traveledlist
