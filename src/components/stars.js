import React from "react";
import Star from "bootstrap-icons/icons/star.svg";
import StarFill from "bootstrap-icons/icons/star-fill.svg";

//This displays the number of filled stars based on the Rating prop.
export default class Stars extends React.Component {
  render() {
    return (
      <div>
        <img src={1 <= this.props.rating ? StarFill : Star} alt="star" />
        <img src={2 <= this.props.rating ? StarFill : Star} alt="star" />
        <img src={3 <= this.props.rating ? StarFill : Star} alt="star" />
        <img src={4 <= this.props.rating ? StarFill : Star} alt="star" />
        <img src={5 <= this.props.rating ? StarFill : Star} alt="star" />
      </div>
    );
  }
}
