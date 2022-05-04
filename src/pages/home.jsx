import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Pagination } from "../components/pagination";
import { Products } from "../components/products";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);

  const getProducts = async () => {
    const fetchProducts = await fetch("db.json");
    const allProducts = await fetchProducts.json();
    setProducts(allProducts.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const lastIndexOfPage = currentPage * perPage;
  const firstIndexOfPage = lastIndexOfPage - perPage;
  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  const currentProducts = products.slice(firstIndexOfPage, lastIndexOfPage);
  const paginationProps = {
    currentPage,
    onChangePage,
    totalPages: Math.ceil(products.length / perPage),
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
