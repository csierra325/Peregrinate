import React, { Component } from "react";
// import Gallery from "../../components/Gallery/Gallery"
import NavTabs from "../../components/NavTabs"
import Dropdown from "../../components/Dropdown/Dropdown";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import API from "../../utils/API";
import ListItem from "../../components/ListItem"


class Wishlist extends Component {
  state = {
    currentPage: "WishList",
    username: window.username,
    selectedCity: "",
    selectedCities: [],
    modal: true
  };

  componentDidMount(){
    API.getUser(window.id) 
    .then(res => {
      const dbBucketlist = res.data;
      console.log(dbBucketlist)
     dbBucketlist.bucketlist.forEach(element => {
      this.state.selectedCities.push(element)         
     });
    }).catch(err => console.log(err));

  } 

  delete(id){
    const selectedCities = this.state.selectedCities.filter(i => i !== id)
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
    // console.log(this.state.selectedCity);
    // this.setState({
    //   selectedCities: [...this.state.selectedCities, this.state.selectedCity]
    // });
    API.updateUser(window.id, {$push:{bucketlist: this.state.selectedCity }})
      .then(res => {
        console.log(res.data);
        API.getUser(window.id) 
        .then(res => {
          this.setState({
            selectedCities: [...this.state.selectedCities, this.state.selectedCity]
         });
        }).catch(err => console.log(err));

      })
      .catch(err => console.log(err));


    console.log(this.state.selectedCities)
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    window.username = this.state.username;

    return (
      <div className="wrapper">
        <NavTabs />
        <div className = "wishListWrapper">
          <Dropdown
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            currentValue={this.state.selectedCity}
          />
        
          <ul>
            {this.state.selectedCities.map((city, i) => (
              <ListItem key={i} text={city}  />
            ))} 
          </ul>
        </div>


        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Welcome to Your Wish List Page</ModalHeader>
          <ModalBody>
            Want to go somewhere but don't know when you can go. Add it to your wish list and come back later!
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Wishlist;