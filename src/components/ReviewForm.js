import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//I created the ReviewForm class. It has a form to accept reviews and passes the data to the function passed into its props. 
export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  //This gathers the input data, resets the form, adds a current date, and passes it into the Update props.
  
  handleFormSubmit(event) {
    event.preventDefault();
    const review = {};
    for (const input of event.target) {
      if (input.id) {
        review[input.id] = input.value;
        if (input.id === "rating") {
          input.value = "3";
        } else {
          input.value = "";
        }
      }
    }
    review.date = new Date().toLocaleDateString("en-US");
    this.props.update(review);
  }
  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col-6" controlId="reviewerName">
            <Form.Label>Reviewer's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Reviewer Name"
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              aria-label="Default select example"
              defaultValue="3"
              required={true}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" placeholder="Review" required={true} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
