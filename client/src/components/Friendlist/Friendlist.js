import React, {Component} from "react";
import API from "../../utils/API";
import ListItem from "../ListItem";
// import API from "../../../../routes/api/friendlist"
// import DeleteBtn from "../DeleteBtn/DeleteBtn.js"
class Friendlist extends Component {
  state = {
    friends: [],
    friendItem: "",
    userID: window.id
  };

  componentDidMount() {
        //PULL IN USER ID HERE TO POPULATE

   // const id = "5b86cc97c6cc1b0a419a5de8";  //Sabrina's user
   const id = "5b88531ffde72333acdf6b5c";
    API.getUser(id)
      .then(res => this.setState({ friends: res.data.friendlist }))
      .catch(err => console.log(err));
  };

  // loadLists = () => {
  //   API.getLists()
  //     .then(res =>
  //       this.setState({ friends: res.data, friendItem: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteList = id => {
  //   API.deleteList(id)
  //     .then(res => this.loadList())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
      const {name, value} = event.target;

      this.setState({
        [name]: value
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {friendItem, friends} = this.state;
    
     //This will go away once Camille is done
    if (friendItem){

      this.setState({
        friends: [friendItem, ...friends],
        friendItem: ""
      });
    }

     //Add API call to api.js 
    //Add AJAX post call here for API.addFriendListItem ****
   
  };

 


 render (){
   return(
    <div className = "friendList">
        <div className ="friendTitle">Friend Recommendations</div>
      <input
      onChange = {this.handleInputChange}
       name = "friendItem"
       value = {this.state.friendItem}
       type="text"
      />
      <button disabled = {this.state.friendItem === ""} type="submit" value = "Submit" onClick = {this.handleSubmit}
      >Submit</button>
      <ul>
        {this.state.friends.map((friend, i) => (
          <ListItem key={i} text={friend} />
        ))} 
        </ul>
    </div>


   );
 }

} 


export default Friendlist