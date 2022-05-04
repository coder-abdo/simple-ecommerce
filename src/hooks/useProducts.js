import { useState, useEffect } from "react";

export const useProduct = () => {
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

  const totalPages = Math.ceil(products.length / perPage);
  return { onChangePage, currentProducts, currentPage, totalPages };
};
