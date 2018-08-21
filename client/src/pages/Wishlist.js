import React from "react";


const Wishlist = () => (
  <div>
  
    <h1>Wishlist</h1>
  </div>
);
export default Wishlist;



// class List extends Component {
//     state = {
//         location: [],
//         notes: "",
//       };
      
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