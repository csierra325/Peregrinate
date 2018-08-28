import React, { Component } from "react";

import Friendlist from "../components/Friendlist/Friendlist";
import Traveledlist from "../components/Traveledlist/Traveledlist";
import Bucketlist from "../components/Bucketlist/Bucketlist";

import Jumbotron from "../components/Jumbotron/Jumbotron";
import NavTabs from "../components/NavTabs"


class Wishlist extends Component {
 

  render() {
    return (
      <div className="wrapper">
         <NavTabs />
        <Jumbotron>

          <div
            className="rowC"
            style={{ height: 800, clear: "both", textAlign: "center" }}
          >
            <Friendlist />
            <Traveledlist />
            <Bucketlist />
            
          </div>
        
        </Jumbotron>
        <Jumbotron>
        <div className= "bucketlistIdeas">Bucket List Ideas</div>
        </Jumbotron>
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
