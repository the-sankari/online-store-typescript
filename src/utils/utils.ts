import Product from "../component/Product";
import { Product } from "../features/productSlice";

export const calculateTotalOfProducts = (products: Product[]) => {
  // This tells typescript that total is always a number
  let total: number = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return parseFloat(total.toFixed(2));
};

export const reversedStrinFunction = (str: string) => {
  return str.split("").reverse().join("").toUpperCase();
};

console.log(reversedStrinFunction("Hello")); 
