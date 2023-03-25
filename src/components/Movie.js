import React from "react";
import Stars from "./stars";
import ReviewList from "./ReviewList";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

//I created the Movie class that displays the Movie components and its child components.
export default class Movie extends React.Component {
  //the constructor initializes the state with current reviews and review count to get the average rating. 
    constructor(props) {
    super(props);
    this.state = {
      reviewTotal: this.props.reviews.reduce(
        (carry, review) => carry + parseInt(review.rating),
        0
      ),
      reviewCount: this.props.reviews.length,
    };
    this.addReview = this.addReview.bind(this);
  }
  //this is the handler passed to the children forms to add reviews to the list and update the average rating.
  addReview(review) {
    this.setState({
      reviewTotal: this.state.reviewTotal + parseInt(review.rating),
      reviewCount: this.state.reviewCount + 1,
    });
    this.props.reviews.push(review);
  }
  //this makes sure that when the state is updated, that rerendering is appropriate.
  shouldComponentUpdate(nextState) {
    return this.state.reviewTotal !== nextState.reviewTotal;
  }
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">
          <h3>{this.props.movieName} ({this.props.releaseDate})</h3>
          <Stars rating={this.state.reviewTotal / this.state.reviewCount} />
        </div>
        <div className="card-body">
            <Row>
                <Col sm={4}>
                <img className="img-fluid" src={this.props.image} alt={this.props.movieName} />
                </Col><Col sm={8} className="d-flex flex-wrap justify-content-around align-content-around">
                <Row><Col><h4>Cast</h4></Col></Row><Row><Col>{this.props.cast}</Col></Row>
            <Row><Col><h4>Synopsis</h4></Col></Row><Row><Col>{this.props.synopsis}</Col></Row>
                </Col>
            </Row>
            </div>
        <div className="card-footer">
          <ReviewList reviews={this.props.reviews} update={this.addReview} />
        </div>
      </div>
    );
  }
}
