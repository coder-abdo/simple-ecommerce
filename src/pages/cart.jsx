/*eslint-disable*/
import React from "react";
import { Button, Heading, Menu, MenuItem, Text } from "@chakra-ui/react";
import { useCart } from "../store/store";
import { ProudctInCart } from "../components/productInCart";
import { Link } from "react-router-dom";
export default function Cart() {
  const { state } = useCart();

  return (
    <div
      className={state.cart.length === 0 ? "container no-items" : "container"}
    >
      <Heading as="h1" size="2xl" mb="5">
        Cart
      </Heading>
      <Menu>
        {state.cart.length > 0 ? (
          state.cart.map((p) => (
            <ProudctInCart key={p.id} product={p} isInCart />
          ))
        ) : (
          <MenuItem display="flex" justifyItems="center" alignItems="center">
            <Text width="100%" textAlign="center" fontSize="lg">
              NO Items Added Yet
            </Text>
          </MenuItem>
        )}
        {state.cart.length > 0 && (
          <MenuItem
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="lg">Total:</Text>
            <Text fontSize="lg">{state.total}$</Text>
          </MenuItem>
        )}
      </Menu>
      <Button colorScheme="whatsapp" mt="5">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
