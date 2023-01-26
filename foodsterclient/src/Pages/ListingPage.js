import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../Components/Card/ProductCard";

const productsUrl = "http://localhost:4000/products";

export default function ListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(productsUrl)
      .then((response) => {
        const { data } = response.data;
        if (data.length > 0) {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div className="app-container" id="listing-page-container">
      <Container>
        <Row>
          {products.length > 0 ? (
            products.map((d, i) => (
              <Col xs={6} sm={6} md={4} lg={3}>
                <ProductCard data={d} />
              </Col>
            ))
          ) : (
            <p>We are not cooking today</p>
          )}
        </Row>
      </Container>
    </div>
  );
}
