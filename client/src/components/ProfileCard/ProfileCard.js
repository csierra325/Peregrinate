import React, { Component } from "react";

const cloudinary = window.cloudinary

const profile = {
  position: "relative",
  width: "200px",
  height: "200px",
  border: "2px dashed rgb(102, 102, 102)",
  borderRadius: "5px"
};

const link = {
  position: "relative"
};

class ProfileCard extends Component {
//   state = {
//     uploadedFileCloudinaryUrl: ""
//   };

  componentDidMount() {
    document.getElementById("upload_widget_opener").addEventListener (
      "click",
      function() {
        cloudinary.openUploadWidget(
          {
            cloud_name: "peregrinate",
            upload_preset: "peregrinate",
            cropping: "server"
          },
          function(error, result) {
            console.log(error, result);
          }
        );
      },
      false
    );
}

  

  render() {
    return (
      <div>
        <div style={profile} />
        <a href="#" id="upload_widget_opener" style={link}>
          Upload Profile Image
        </a>

      </div>
    );
  }
  }
  



export default ProfileCard
