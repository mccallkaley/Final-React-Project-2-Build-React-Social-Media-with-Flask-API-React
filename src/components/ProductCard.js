import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

import { Redirect } from "react-router-dom";
export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleRenderProduct = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* come back for single item */}
        {this.state.clicked ? (
          <Redirect to={`/product/${this.props.product.product_id}`} />
        ) : (
          ""
        )}
        <Card border="dark" style={{ width: "425px", height: "500px", marginBottom: "25px", backgroundColor: "pink", }}>
          <Card.Header></Card.Header>
          <Card.Img
            variant="top"
            style={{ height: "100px", objectFit: "contain" }}
            alt={this.props.product.title + " image"}
            src={this.props.product.image}
          />
          <Card.Body>
            <Card.Title>
              {(this.props.product.title) ?? "Generic Item"}
            </Card.Title>
            <Card.Text>
              {this.props.product.body ?? "Sorry No body"}
            </Card.Text>
            <Card.Subtitle className="float-end">
              ${this.props.product.price ?? "?.??"}{" "}
            </Card.Subtitle>
            <br />
            <button
              style={{
                backgroundColor: "pink",
                border: "none",
                color: "blue",
              }}
              onClick={() => this.handleRenderProduct()}
            >
              See More
            </button>
            <Button variant="info" onClick={()=>this.props.addToCart(this.props.product)}> Add To Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}








