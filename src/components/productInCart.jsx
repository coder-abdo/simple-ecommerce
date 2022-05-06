import React from "react";
import { Image, MenuItem, Box, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaMinus } from "react-icons/fa";
export const ProudctInCart = ({ product }) => {
  return (
    <MenuItem>
      <Image
        src={product.featuredPhoto}
        boxSize="50px"
        alt={product.name}
        borderRadius="full"
      />
      <Box ml="6px" maxW="150px">
        <Text fontSize="sm" fontWeight="bold" mb="2">
          {product.name}
        </Text>
        <Text fontSize="xs" wordBreak="break-word" color="gray.400">
          {product.description}
        </Text>
      </Box>
      <Box ml="2">
        <Button>
          <AddIcon fontSize="xl"></AddIcon>
        </Button>
        <Text fontSize="md" fontWeight="bold" textAlign="center" my="2">
          {product.quantity}
        </Text>
        <Button disabled={product.quantity <= 1}>
          <FaMinus fontSize="xl" />
        </Button>
      </Box>
    </MenuItem>
  );
};
