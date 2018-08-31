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
<<<<<<< HEAD
    const id = "5b895e10df44a9340627db5d";
=======
     // const id = "5b86cc97c6cc1b0a419a5de8";  //Sabrina's user
     const id = "5b88531ffde72333acdf6b5c";
>>>>>>> 89ddd46451a3fe410da137b46af964271124d25a
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
        {this.state.travels.map((travel, i) => (
            <ListItem key={i} text={travel} />  

        ))}
        </ul>
    </div>


   );
 }

} 


export default Traveledlist