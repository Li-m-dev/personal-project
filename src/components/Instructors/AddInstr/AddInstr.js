import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../../../firebase";
import FileUploader from "react-firebase-file-uploader";

import { addNewInstr } from "../../../ducks/instrReducer";

class AddInstr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      pic: "",
      intro: "",
      isUploading: false,
      progress: 0
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ pic: url }));
  };

  render() {
    const { name, title, pic, intro } = this.state;
    return (
      <div className="addInstr_page">
        <h1> ADD A NEW INSTRUCTOR </h1>
        <div className="addInstr_form">
          <div className="addInstr_name">
            <p>Name</p>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.name}
              name="name"
            />
          </div>
          <div className="addInstr_title">
            <p>Title</p>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.title}
              name="title"
            />
          </div>
          <div className="addInstr_pic">
            <p>Picture</p>
            {/* <input
            onChange={this.handleChange}
            type="text"
            value={this.state.pic}
            name="pic"
          /> */}
            <form>
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              {this.state.avatarURL && (
                <img src={this.state.avatarURL} alt={this.state.name} />
              )}
              <FileUploader
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </form>
          </div>
          <div className="addInstr_intro">
            <p>Introduction</p>
            <textarea
              onChange={this.handleChange}
              type="text"
              value={this.state.intro}
              name="intro"
            />
          </div>
        </div>
        <div>
          <button
            className="admin_btn"
            onClick={() =>
              this.props
                .addNewInstr(name, title, pic, intro)
                .then(() => this.props.history.push("/instructors"))
            }
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.instructors
  };
};

export default connect(
  mapStateToProps,
  { addNewInstr }
)(AddInstr);
