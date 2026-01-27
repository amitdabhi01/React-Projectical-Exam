import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useSelector } from "react-redux";

const ProductList = () => {
  const Products = useSelector((state) => state.Product.products);

  console.log(Products);

  console.log("data", Products);

  return (
    <>
      <Container className="border border-black mt-5">
        <h2 className="text-center my-4">Product List</h2>
        {Products.length === 0 ? (
          <p className="text-center my-4">
            No products added yet. Add some products to see them here!
          </p>
        ) : (
          <Row className="g-4 py-4">
            {Products.map((prod) => (
              <Col key={prod.id} sm={6} md={4} lg={3} xl={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                      <p className="mb-1">
                        <strong>Price:</strong> ₹{prod.price}
                      </p>
                      <p className="mb-0">
                        <strong>Category:</strong> {prod.category}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductList;
