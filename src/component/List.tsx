import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Product from "./Product";
import { fetchProducts } from "../features/productSlice";
import { Col, Container, Row } from "react-bootstrap";
import { calculateTotalOfProducts } from "../utils/utils";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, [dispatch]);
  const totalOfProducts = calculateTotalOfProducts(products);
  return (
    <Container fluid className="list-container">
        <h2>{totalOfProducts}</h2>
      <Row xs={2} md={3} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
