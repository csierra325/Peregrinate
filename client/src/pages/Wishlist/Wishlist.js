import React, { Component } from "react";
import Gallery from "../../components/Gallery/Gallery"
import NavTabs from "../../components/NavTabs"
import Dropdown from "../../components/Dropdown/Dropdown";


class Wishlist extends Component {
  state = {
    currentPage: "WishList",
    username: window.username,
    selectedCity: "",
    selectedCities: []
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  
    console.log(this.state.selectedCity);
    this.setState({
      selectedCities: [...this.state.selectedCities, this.state.selectedCity]
    });
 
    console.log(this.state.selectedCities)
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
                  <li>{city}</li> 
                 ))} 
                 </ul>
               </div>
               
        
      
        <div className= "bucketlistIdeas">Bucket List Ideas</div>
        <Gallery/>
        
      </div>
    );
  }
}

export default Wishlist;

// render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Where Should I go?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//               value={this.state.location}
//               onChange = {this.handleInputChange}
//               name="location"
//               placeholder="Location (required)"
//                />
//               <TextArea
//               value={this.state.notes}
//               onChange = {this.handleInputChange}
//               name="notes"
//               placeholder="Notes (Optional)"
//                />
//               <FormBtn
//               disable={!(this.state.location)}
//               onClick = {this.handleFormSubmit}
//               >Submit Location</FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Locations On My List</h1>
//             </Jumbotron>
//             {this.state.list.length ? (
//               <List>
//                 {this.state.list.map(list => (
//                   <ListItem key={list._id}>
//                     <a href={"/list/" + list._id}>
//                       <strong>
//                         {list.title} by {list.author}
//                       </strong>
//                     </a>
//                     <DeleteBtn onClick = {() => this.deleteList(list._id)}/>
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default List;
