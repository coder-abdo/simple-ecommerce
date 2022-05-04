import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Image,
  ListItem,
  Text,
  Flex,
  Stack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Product({ product }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <ListItem>
      <Image
        onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              width="100%"
              objectFit="cover"
              height="150px"
              src={product.featuredPhoto}
              alt={product.name}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </ListItem>
  );
}
