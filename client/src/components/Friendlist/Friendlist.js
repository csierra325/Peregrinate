import React, {Component} from "react";
// import API from "../../../../routes/api/friendlist"


class Friendlist extends Component {
  state = {
    friends: ["Brazil"],
    friendItem: "",
  
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
    
    if (friendItem){

      this.setState({
        friends: [friendItem, ...friends],
        friendItem: ""
      });
    }
   
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
        {this.state.friends.map(friend => (
          <li>{friend}</li>
        ))}
        </ul>
    </div>


   );
 }

} 


export default Friendlist