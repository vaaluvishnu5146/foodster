import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export default function ProductCard({ data = {} }) {
  return (
    <Card>
      <img alt="Sample" src={data.image} />
      <CardBody>
        <CardTitle tag="h5">{data.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {data.description}
        </CardSubtitle>
        <CardText>{data.actualPrice}</CardText>
        <Button>{"Add to cart"}</Button>
      </CardBody>
    </Card>
  );
}
