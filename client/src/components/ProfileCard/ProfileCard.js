import React, { Component } from "react";
import request from 'superagent';
import Dropzone from "react-dropzone";

//import statements
const CLOUDINARY_UPLOAD_PRESET = "peregrinate";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/peregrinate/upload";


class ProfileCard extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    uploadedFileCloudinaryUrl: ""
  };

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }






  

  render() {
    return (
      <div >
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
          >
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === "" ? null : (
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img 
                src={this.state.uploadedFileCloudinaryUrl}
                alt="Profile"
                 />
            </div>
          )}
        </div>
      </form>
      </div>
    );
  }
}

export default ProfileCard;
