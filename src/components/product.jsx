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
  Button,
  ModalFooter,
} from "@chakra-ui/react";

export default function Product({ product }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <ListItem boxShadow="xs" pb="2">
      <Image
        onClick={onOpen}
        maxWidth="100%"
        width="100%"
        height="250px"
        objectFit="cover"
        src={product.featuredPhoto}
        alt={product.name}
        fallback="images/product.jpg"
        cursor="pointer"
      />
      <Text fontSize="lg" fontWeight="bold" ml="2" mt="5">
        {product.name}
      </Text>
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="5"
        px="2"
      >
        <Stack direction="row" alignItems="center">
          <Badge
            variant="solid"
            colorScheme="blackAlpha"
            textAlign="center"
            alignItems="center"
            p="2"
          >
            {product.rate} <StarIcon />
          </Badge>
          <Text fontSize="md" textTransform="capitalize">
            {product.reviewsCount} reviews
          </Text>
        </Stack>
        <Text fontSize="lg" fontWeight="large">
          {" "}
          Price: {product.price}$
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
              height="180px"
              src={product.featuredPhoto}
              alt={product.name}
            />
            <Text fontSize="lg" fontWeight="bold" ml="2" mt="5">
              {product.name}
            </Text>
            <Text fontSize="md" fontWeight="bold" ml="2">
              {product.description}
            </Text>
            <Flex
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="5"
              px="2"
            >
              <Stack direction="row" alignItems="center">
                <Badge
                  variant="solid"
                  colorScheme="blackAlpha"
                  textAlign="center"
                  alignItems="center"
                  p="2"
                >
                  {product.rate} <StarIcon />
                </Badge>
                <Text fontSize="md" textTransform="capitalize">
                  {product.reviewsCount} reviews
                </Text>
              </Stack>
              <Text fontSize="lg" fontWeight="large">
                {" "}
                Price: {product.price}$
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              size="lg"
              colorScheme="whatsapp"
              alignSelf="center"
              mt="5"
              ml="2"
            >
              Add To Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button size="lg" colorScheme="whatsapp" alignSelf="center" mt="5" ml="2">
        Add To Cart
      </Button>
    </ListItem>
  );
}
