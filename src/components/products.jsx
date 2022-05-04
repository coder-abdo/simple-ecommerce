import React from "react";
import { List } from "@chakra-ui/react";
import Product from "./product";

export const Products = ({ products }) => {
  return (
    <List display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="2rem">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </List>
  );
};
