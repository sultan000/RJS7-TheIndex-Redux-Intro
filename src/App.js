import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  // addAuthor = () => {
  //   const newAuthor = {
  //     id: this.state.newAuthorId,
  //     first_name: "Author",
  //     last_name: "McAuthorFace",
  //     imageUrl:
  //       "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
  //     books: [
  //       {
  //         title: "Anonymous book",
  //         color: "mysterious color"
  //       }
  //     ]
  //   };
  //   this.setState({
  //     authors: this.state.authors.concat(newAuthor),
  //     newAuthorId: this.state.newAuthorId + 1
  //   });
  // };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(
  mapDispatchToProps,
  null
)(App);
