import React, {Component} from "react";
import ListItem from "../ListItem";

class Bucketlist extends Component {
  state = {
    buckets: ["Brazil"],
    bucketItem: "",
  
  };

  handleInputChange = event => {
      const {name, value} = event.target;

      this.setState({
        [name]: value
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {bucketItem, buckets} = this.state;
    
    if (bucketItem){
      this.setState({
        buckets: [bucketItem, ...buckets],
        bucketItem: ""
      });
    }
   
  };


 render (){
   return(
    <div className = "bucketList">
      <div className = "buckettitle"> My Bucket List</div>
      <input
      onChange = {this.handleInputChange}
       name = "bucketItem"
       value = {this.state.bucketItem}
       type="text"
      />
      <button disabled = {this.state.bucketItem === ""} type="submit" value = "Submit" onClick = {this.handleSubmit}
      >Submit</button>
      <ul>
        {this.state.buckets.map(bucket => (
      
          <ListItem  text={bucket}  /> 
          
        ))}
        </ul>
    </div>


   );
 }

} 


export default Bucketlist
