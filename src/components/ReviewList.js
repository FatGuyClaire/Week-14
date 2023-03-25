import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

//I created the ReviewList class. It is a container for the Review components. 
export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white"><h4>Movie Reviews</h4></div>
        <div className="card-body">
          {this.props.reviews.map((review, i) => (
            <Review key={i} {...review} />
          ))}
        </div>
        <div className="card-footer border-top border-5">
          <ReviewForm update={this.props.update} />
        </div>
      </div>
    );
  }
}
