import React, {Component} from "react";
import API from "../../utils/API";
import ListItem from "../ListItem";

class Bucketlist extends Component {
  state = {
    buckets: [],
    bucketItem: "",
    userID: window.id,
    id: window.id
  };

  componentDidMount() {
    API.getUser(window.id)
      .then(res => this.setState({ buckets: res.data.bucketlist }))
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
    const {bucketItem, buckets} = this.state;
    
    //This will go away once Camille is done
    if (bucketItem){
      this.setState({
        buckets: [bucketItem, ...buckets],
        bucketItem: ""
      });
    }

     //Add API call to api.js 
    //Add AJAX post call here for API.addBucketlistItem ****
   
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
        {this.state.buckets.map((bucket, i) => (
      
          <ListItem key={i} text={bucket}  /> 
          
        ))}
        </ul>
    </div>


   );
 }

} 


export default Bucketlist
