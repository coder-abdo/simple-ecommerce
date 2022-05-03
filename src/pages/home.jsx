import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const fetchProducts = await fetch("db.json");
    const allProducts = await fetchProducts.json();
    setProducts(allProducts.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="products-container">
      <Heading size="lg">Products</Heading>
      <List display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="2rem">
        {products.map((product, idx) => (
          <ListItem key={idx}>
            <Image
              maxWidth="100%"
              width="100%"
              height="250px"
              objectFit="cover"
              src={product.featuredPhoto}
              alt={product.name}
            />
            <Text fontSize="md">{product.name}</Text>
            <Flex
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center">
                <Badge
                  backgroundColor="black"
                  padding="5px 10px"
                  color="white"
                  variant="solid"
                >
                  {product.rate} <StarIcon />
                </Badge>
                <Text fontSize="sm" textTransform="capitalize">
                  {product.reviewsCount} reviews
                </Text>
              </Stack>
              <Text fontSize="sm" fontWeight="large">
                {" "}
                price: {product.price}$
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
