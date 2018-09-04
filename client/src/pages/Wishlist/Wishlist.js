import React, { Component } from "react";

import Friendlist from "../../components/Friendlist/Friendlist";
import Traveledlist from "../../components/Traveledlist/Traveledlist";
import Bucketlist from "../../components/Bucketlist/Bucketlist";
import Gallery from "../../components/Gallery/Gallery";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import NavTabs from "../../components/NavTabs";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class Wishlist extends Component {
  state = {
    currentPage: "WishList",
    username: window.username,
    // this.props.match.params.id
    modal: true
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
        <Jumbotron>
          <div>
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

          <Dropdown />
          <div
            className="rowC"
            style={{ height: 800, clear: "both", textAlign: "center" }}
          >
            <Friendlist />
            <Traveledlist />
            <Bucketlist />
          </div>
        </Jumbotron>

        <div className="bucketlistIdeas">Bucket List Ideas</div>
        <Gallery />
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
