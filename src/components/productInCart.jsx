/*eslint-disable*/
import React from "react";
import { Image, MenuItem, Box, Text, Button } from "@chakra-ui/react";
import { AddIcon, Icon } from "@chakra-ui/icons";
import { FaMinus, FaTrash } from "react-icons/fa";
import {
  DECREASE_QUANTITY,
  ICREASE_QUANTITY,
  REMOVE_FROM_CART,
  useCart,
} from "../store/store";
import { decreaseQuantity, increaseQuantity, removeItem } from "../utils";
export const ProudctInCart = ({ product, isInCart }) => {
  const { state, dispatch } = useCart();

  const decreaseQuantityItems = () => {
    const { total } = decreaseQuantity(product, state.cart);
    dispatch({ type: DECREASE_QUANTITY, payload: total });
  };
  const increaseQuantityItems = () => {
    const { total } = increaseQuantity(product, state.cart);
    dispatch({ type: ICREASE_QUANTITY, payload: total });
  };
  const removeItemFromCart = (product) => {
    const { cart, total } = removeItem(product, state.cart);
    dispatch({ type: REMOVE_FROM_CART, payload: { cart, total } });
  };
  return (
    <MenuItem>
      <Image
        src={product.featuredPhoto}
        boxSize={isInCart ? "250px" : "50px"}
        alt={product.name}
        borderRadius={isInCart ? "" : "full"}
      />
      <Box ml="6px" maxW={isInCart ? "60%" : "150px"}>
        <Text fontSize={isInCart ? "lg" : "sm"} fontWeight="bold" mb="2">
          {product.name}
        </Text>
        <Text
          fontSize={isInCart ? "md" : "xs"}
          wordBreak="break-word"
          color="gray.400"
        >
          {product.description}
        </Text>
      </Box>
      <Box ml="2">
        <Button onClick={increaseQuantityItems}>
          <AddIcon fontSize="xl"></AddIcon>
        </Button>
        <Text fontSize="md" fontWeight="bold" textAlign="center" my="2">
          {product.quantity}
        </Text>
        <Button
          disabled={product.quantity <= 1}
          onClick={decreaseQuantityItems}
        >
          <FaMinus fontSize="xl" />
        </Button>
      </Box>
      {isInCart && (
        <Icon
          as={FaTrash}
          color="red.500"
          fontSize="22px"
          ml="5"
          onClick={() => removeItemFromCart(product)}
        />
      )}
    </MenuItem>
  );
};
