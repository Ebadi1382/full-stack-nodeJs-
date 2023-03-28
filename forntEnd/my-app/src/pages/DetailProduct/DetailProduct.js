import React, { useEffect } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { cartAction } from "../../store/action/cartAction";
import { productDetailAction } from "../../store/action/productDetailAction";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, productDetail } = useSelector((store) => store.productDetail);
  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [dispatch, id]);
  const paramsCart = useParams();
  const navigate = useNavigate();
  const clickCartHandler = () => {
    navigate(`/cart/${paramsCart.id}`);
    dispatch(cartAction(id));
  };
  return (
    <div>
      <Link to="/" className="btn btn-outline-info rounded p-3">
        بازکشت به صفحه اصلی
      </Link>
      {loading ? (
        <h2>...در حال گرفتن اطلاعات</h2>
      ) : (
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col md={6}>
            <Image src={productDetail.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{productDetail.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <p>{productDetail.price}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>{productDetail.description}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Button onClick={clickCartHandler} className="btn-block" type="button">
                  افزودن به سبد خرید
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DetailProduct;
