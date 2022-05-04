import React from "react";
import { Button, Stack } from "@chakra-ui/react";
export const Pagination = (props) => {
  const { totalPages, currentPage, onChangePage } = props;
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  const PageNumbers = () =>
    pages.map((page) => {
      return (
        <Button
          key={page}
          size="lg"
          variant={page === currentPage ? "solid" : "outline"}
          id={page}
          colorScheme="blackAlpha"
          onClick={(evt) => onChangePage(Number(evt.target.id))}
        >
          {page}
        </Button>
      );
    });

  return (
    <Stack direction="row" align="center" justify="center" mt="5">
      <PageNumbers />
    </Stack>
  );
};
