import React from "react";
import Stars from "./stars";

//This shows data for the review in a card.
export default class Review extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">
          {this.props.reviewerName} ({this.props.date})
          <Stars rating={this.props.rating} />
        </div>
        <div className="card-body">{this.props.content}</div>
      </div>
    );
  }
}
