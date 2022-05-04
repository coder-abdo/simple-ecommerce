import { Heading } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "../components/pagination";
import { Products } from "../components/products";
import { useProduct } from "../hooks/useProducts";
export default function Home() {
  const { currentPage, currentProducts, onChangePage, totalPages } =
    useProduct();
  const paginationProps = {
    currentPage,
    onChangePage,
    totalPages,
  };
  return (
    <div className="products-container">
      <Heading size="lg" mb="5">
        Products
      </Heading>
      <Products products={currentProducts} />
      <Pagination {...paginationProps} />
    </div>
  );
}
