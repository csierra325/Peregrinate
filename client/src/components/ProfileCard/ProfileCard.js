import React, { Component } from "react";

const cloudinary = window.cloudinary;
// const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/peregrinate/upload";

const profile = {
  position: "relative",
  width: "200px",
  height: "200px",
  border: "2px dashed rgb(102, 102, 102)",
  borderRadius: "5px"
};

const link = {
    position: "relative",
}


class ProfileCard extends Component {

    state = {
            uploadedFileCloudinaryUrl: ""
          };

          onImageSelect(files) {
                this.setState({
                  uploadedFile: files[0]
                });
            
                this.handleImageUpload(files[0]);
              }
            
            //   handleImageUpload(file) {
                
            //       .post(CLOUDINARY_UPLOAD_URL)
                  
            
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
    

    componentDidMount () {
        document.getElementById("upload_widget_opener").addEventListener("click", function() {
            cloudinary.openUploadWidget({ cloud_name: 'peregrinate', upload_preset: 'peregrinate', cropping: 'server'}, 
              function(error, result) { console.log(error, result) });
          }, false);
    }

    render () {
        return (
            
            <div>
                <div style={profile}></div>
                <a href="#" id="upload_widget_opener" style={link}>Upload Profile Image</a>

                    {/* <img
                      src={this.state.uploadedFileCloudinaryUrl}
                      
                    /> */}
                 
               
              </div>
            



        );
    }

    }

export default ProfileCard;














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
//                     <p>{this.state.uploadedFile.name}</p>
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
