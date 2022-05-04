import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Image, ListItem, Text, Flex, Stack } from "@chakra-ui/react";

export default function Product({ product }) {
  return (
    <ListItem>
      <Image
        maxWidth="100%"
        width="100%"
        height="250px"
        objectFit="cover"
        src={product.featuredPhoto}
        alt={product.name}
        fallback="https://via.placeholder.com/250"
      />
      <Text fontSize="md">{product.name}</Text>
      <Flex display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Badge variant="solid" colorScheme="blackAlpha">
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
  );
}
