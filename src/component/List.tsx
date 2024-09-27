import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Product from "./Product";
import { fetchProducts } from "../features/productSlice";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
    console.log(products);
  }, [dispatch])
  return (
    <div className="list">
      <h1>Products</h1>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
};

export default List;
