import React, { Component } from "react";
import {Image} from 'cloudinary-react';






















// Below is working code for rendering image in browser using <dropzone>
/////////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import request from "superagent";
// import Dropzone from "react-dropzone";

// //import statements
// const CLOUDINARY_UPLOAD_PRESET = "ciqbkaar";
// const CLOUDINARY_UPLOAD_URL =
//   "https://api.cloudinary.com/v1_1/peregrinate/upload";

// const dropzoneStyle = {
//   position: "relative",
//   width: "200px",
//   height: "200px",
//   border: "2px dashed rgb(102, 102, 102)",
//   borderRadius: "5px"
// };

// const profileStyle = {
//   position: "relative",
//   width: "300px",
//   height: "300px",
//   border: "2px solid rgb(102, 102, 102)",
//   borderRadius: "5px",
//   zIndex: "2"
// };

// class ProfileCard extends Component {
//   // Setting the initial values of this.state.username and this.state.password
//   state = {
//     uploadedFileCloudinaryUrl: ""
//   };

//   onImageDrop(files) {
//     this.setState({
//       uploadedFile: files[0]
//     });

//     this.handleImageUpload(files[0]);
//   }

//   handleImageUpload(file) {
//     let upload = request
//       .post(CLOUDINARY_UPLOAD_URL)
//       .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
//       .field("file", file);

//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }

//       if (response.body.secure_url !== "") {
//         this.setState({
//           uploadedFileCloudinaryUrl: response.body.secure_url
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <div className="FileUpload">
//             <Dropzone
//               onDrop={this.onImageDrop.bind(this)}
//               multiple={false}
//               accept="image/*"
//               style={dropzoneStyle}
//             >
//               <div className="profile">
//                 Drop an image or click to select a file to upload.
//               </div>
//               <div>
//                 {this.state.uploadedFileCloudinaryUrl === "" ? null : (
//                   <div>
//                     {/* <p>{this.state.uploadedFile.name}</p> */}
//                     <img
//                       src={this.state.uploadedFileCloudinaryUrl}
//                       alt="Profile"
//                       style={profileStyle}
//                     />
//                   </div>
//                 )}
//               </div>
//             </Dropzone>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default ProfileCard;
