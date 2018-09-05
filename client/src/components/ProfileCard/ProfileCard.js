import React, { Component } from "react";
import API from "../../utils/API";

const cloudinary = window.cloudinary;


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
    const profile = {
      position: "relative",
      width: "300px",
      height: "300px",
      border: "2px dashed rgb(102, 102, 102)",
      borderRadius: "5px"
    };
    
    const link = {
      position: "relative"
    };
    
    return (
      <div>
<<<<<<< HEAD
        {this.state.uploadedFileCloudinaryUrl ? <img src={this.state.uploadedFileCloudinaryUrl} style={profile}/> : <div style={profile} />}
        
        <div>
=======
        {this.state.uploadedFileCloudinaryUrl ? <img src={this.state.uploadedFileCloudinaryUrl} alt=""/> : <div style={profile} />}
>>>>>>> 9ea044168dea22bc90f7ab2b945ebf6bcb7b26a3
        <a href="#" id="upload_widget_opener" style={link}>
          Upload Profile Image
        </a>
        </div>
      </div>
    );
  };

}

export default ProfileCard;
