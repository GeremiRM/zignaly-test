import {
  Stack,
  Image,
  Box,
  Heading,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { Currency } from "../../../common/Currency";

import { Phone } from "../../../types/phone";

interface Props {
  phone: Phone;
}

export const PhoneCardComponent: React.FC<Props> = ({ phone }) => {
  const { model, price, available, image, rating } = phone;

  return (
    <Stack
      color="#333"
      justify="space-between"
      position="relative"
      spacing={["3.5rem", "2.5rem"]}
      role="group"
    >
      <Box position="relative">
        <Image
          src={image}
          w="100%"
          h="auto"
          objectFit="cover"
          transition="0.5s ease all"
          _groupHover={{ transform: "scale(1.05)" }}
        />
      </Box>
      <Stack
        align="center"
        fontFamily="Bebas Neue"
        fontSize="1.25rem"
        textAlign="center"
      >
        <Text fontSize="2rem" noOfLines={1}>
          {model}
        </Text>
        <Text>{available ? "Available" : "Not Available"}</Text>
        <Text fontSize="3rem">
          <Currency>{price}</Currency>
        </Text>
      </Stack>
    </Stack>
  );
};
