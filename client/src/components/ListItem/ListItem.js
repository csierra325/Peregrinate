import React from "react";
import API from "../../utils/API";


// deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setState ={
//             selectedCities: []
//         }
//         this.delete = this.delete.bind(this)
//     }

//    delete (id) {
//             this.props.delete(id);
//     }

//     render(){
//         return (

//             <ul>
//             {this.props.selectedCities.map((city, i) => (
//                 <li>{this.props.text} <button onClick={this.delete.bind(this)} >x</button></li>
//             ))} 
//           </ul>
            
//         )
//     }
// }

   
    
 const ListItem = props => (
     
    <li>{props.text} <button >x</button></li>
);



export default ListItem;