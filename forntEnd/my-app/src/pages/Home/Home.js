import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { productAction } from "../../store/action/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <h2>...در حال دریافت اطلاعات</h2>
      ) : (
        <Row>
          {product.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Product product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Home;
