import React from "react";
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeProudctAction } from "../../store/action/cartAction";

const Cart = () => {
  const { cartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(removeProudctAction(id));
  };
  return (
    <div>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {cartItem.lenght === 0 ? (
            <h2>سبد خرید خالی است</h2>
          ) : (
            <ListGroup variant="flush">
              {cartItem.map((item) => {
                return (
                  <ListGroupItem key={item.product}>
                    <Row style={{ display: "flex", alignItems: "center", border: "1px #ccc solid", borderRadius: "10px" }}>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>{item.name}</Col>
                      <Col md={2}>{item.price}</Col>
                      <Col>
                        <Button type="button" variant="danger" onClick={() => removeProduct(item.product)}>
                          <i className="fa fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <span>Total Price : </span>
                {cartItem.reduce((prev, now) => prev + now.price, 0)}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
