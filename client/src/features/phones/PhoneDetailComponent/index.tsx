import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Image,
  ModalOverlay,
  UseDisclosureProps,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { Currency } from "../../../common/Currency";

import { useAppSelector } from "../../../state/hooks";
import { selectPhones, selectPhone } from "../phoneSlice";

export const PhoneDetailComponent: React.FC<UseDisclosureProps> = ({
  isOpen,
  onClose,
}) => {
  const { selectedPhone } = useAppSelector(selectPhones);

  if (!selectedPhone) return null;

  const { model, price, available, image, description } = selectedPhone;

  return (
    <Modal
      isOpen={isOpen!}
      onClose={() => {
        selectPhone(undefined);
        onClose!();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          bg="#333"
          color="#ccc"
          fontFamily="Bebas Neue"
          fontSize={["1.75rem", "2rem", "3rem"]}
          textAlign="center"
        >
          {model}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb="2rem">
            <Image src={image} alt={model} />
          </Box>
          <Box>{description}</Box>
        </ModalBody>
        <ModalFooter
          bg={available ? "#44784D" : "#491919"}
          color="white"
          fontFamily="Bebas Neue"
          fontSize={["1.75rem", "2rem", "3rem"]}
        >
          <Box as="span" mr="0.5rem">
            Price:
          </Box>
          <Box>
            {available ? <Currency>{price}</Currency> : "Not Available"}
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
