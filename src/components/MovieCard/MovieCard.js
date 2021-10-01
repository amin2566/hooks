import React from "react";
import { Card } from "react-bootstrap";

import Rate from "../Rate/Rate";
export const MovieCard = ({
  movie: { image, name, rating, date, description, id },
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" style={{ height: "300px" }} src={image} />
      <Card.Body>
        <Card.Title style={{ height: "50px" }}>{name}</Card.Title>
        <Card.Text style={{ height: "20px" }}>{date}</Card.Text>

        <Rate rating={rating} style={{ height: "20px" }} />
      </Card.Body>
    </Card>
  );
};
