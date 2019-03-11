import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";



const mapDispatchToProps = dispatch => {
  return {
    onAdd_Author: () => dispatch(actionCreators.ADD_AUTHOR())
  };
};

class author extends Component {
  

  ADD_AUTHOR = () => {
    const newAuthor = this.state.authors;
    this.setState({ author: newAuthor });
  };

  render() {
    return (
      <div>
        {this.state.authors}
        <button onClick={this.props.onAdd_Author}>add author</button>
      </div>
    );
  }


export default connect(
  null,
  mapDispatchToProps
)(author);

// {this.props.ctr}
