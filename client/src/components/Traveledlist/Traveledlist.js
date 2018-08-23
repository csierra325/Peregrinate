import React, {Component} from "react";


class Traveledlist extends Component {
  state = {
    travels: ["Brazil"],
    travelItem: "",
  
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
    
    if (travelItem){
      this.setState({
        travels: [travelItem, ...travels],
        travelItem: ""
      });
    }
   
  };


 render (){
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
          <li>{travel}</li>
        ))}
        </ul>
    </div>


   );
 }

} 


export default Traveledlist