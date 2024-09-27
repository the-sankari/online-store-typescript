import { Button, Card, ListGroup } from "react-bootstrap";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../features/productSlice";

interface Rating {
  rate: number;
  count: number;
}

interface IProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rating: Rating;
}

const Product = (props: IProps) => {
  const { id, image, title, price, rating, description } = props;
  const product = props;
  const dispatch = useAppDispatch();
  const handleAddProduct = () => {
    dispatch(addToCart(product));
    console.log("Add product");
  };
  return (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>
          Rating: {rating.rate} ({rating.count})
        </ListGroup.Item>
      </ListGroup>
      <Button onClick={handleAddProduct}>Add Product to Cart</Button>
    </Card>
  );
};

export default Product;
