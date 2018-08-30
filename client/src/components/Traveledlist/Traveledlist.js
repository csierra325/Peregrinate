import React, {Component} from "react";
import ListItem from "../ListItem";
import API from "../../utils/API";


class Traveledlist extends Component {
  state = {
    travels: [],
    travelItem: "",
  };

  componentDidMount() {
    //PULL IN USER ID HERE TO POPULATE
    const id = "5b86cc97c6cc1b0a419a5de8";
    API.getUser(id)
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
   
    //Add API call to api.js 
    //Add AJAX post call here for API.addTravelItem ****

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
        {this.state.travels.map(travel => (
            <ListItem text={travel} />  

        ))}
        </ul>
    </div>


   );
 }

} 


export default Traveledlist