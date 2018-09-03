import React, { Component } from "react";
import API from "../../utils/API";

const cloudinary = window.cloudinary;

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
  state = {
    uploadedFileCloudinaryUrl: "",
    userID: window.id
  };

  updateUser = (id, updating) => {
    console.log( "Yo?")
    API.updateUser(id, updating)
     .then(res => {
       console.log(res);
       this.setState({
            uploadedFileCloudinaryUrl: res.data.uploadedFileCloudinaryUrl
        });
     })
     .catch(err => console.log(err));
  }

  componentDidMount() {
    document.getElementById("upload_widget_opener").addEventListener ( "click", () => {
        cloudinary.openUploadWidget(
          {
            cloud_name: "peregrinate",
            upload_preset: "peregrinate",
            cropping: "server"
          },
          (error, result) => {
            console.log(result);
            console.log(error);
            this.updateUser(window.id, {
                uploadedFileCloudinaryUrl: result[0].url
            });
          }
        );
      },
      false
    );

    //API
  }

  render() {
    return (
      <div>
        {this.state.uploadedFileCloudinaryUrl ? <img src={this.state.uploadedFileCloudinaryUrl} /> : <div style={profile} />}
        <a href="#" id="upload_widget_opener" style={link}>
          Upload Profile Image
        </a>
      </div>
    );
  };

}

export default ProfileCard;
