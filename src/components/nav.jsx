import React from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  FaShoppingCart,
  FaProductHunt,
  FaChevronDown,
  FaTrash,
} from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { CLEAR_CART, useCart } from "../store/store";
import { ProudctInCart } from "./productInCart";
import { Link } from "react-router-dom";
export const Nav = () => {
  const { state, dispatch } = useCart();
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <nav>
      <Flex p="4">
        <Box fontSize="30px">
          <Icon as={FaProductHunt} color="green.400" />
        </Box>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown color="green.500" />}
          >
            <FaShoppingCart color="green.400" />
          </MenuButton>
          <MenuList>
            <MenuGroup>
              {state.cart.length > 0 ? (
                state.cart.map((p) => <ProudctInCart key={p.id} product={p} />)
              ) : (
                <MenuItem>No Items Added Yet</MenuItem>
              )}
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <Flex>
                <MenuItem w="50%">
                  <Link to="/cart">Checkout</Link>
                </MenuItem>
                <MenuItem
                  w="50%"
                  display="flex"
                  justifyContent="center"
                  onClick={clearCart}
                >
                  <FaTrash color="red" fontSize="xl" />
                </MenuItem>
              </Flex>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </nav>
  );
};
