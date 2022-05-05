import React from "react";
import { List } from "@chakra-ui/react";
import Product from "./product";

export const Products = ({ products }) => {
  const gridColumnsValues = ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"];
  return (
    <List display="grid" gridTemplateColumns={gridColumnsValues} gridGap="2rem">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </List>
  );
};
