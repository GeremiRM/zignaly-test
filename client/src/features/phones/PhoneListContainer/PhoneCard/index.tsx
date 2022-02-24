import { Stack, Image, Box, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { selectPhone } from "../../phoneSlice";
import { Currency } from "../../../../common/Currency";
import { Phone } from "../../../../types/phone";

interface Props {
  phone: Phone;
  handleClick: (id: number) => void;
}

export const PhoneCard: React.FC<Props> = ({ phone, handleClick }) => {
  const dispatch = useDispatch();

  const { id, model, price, available, image } = phone;

  return (
    <Stack
      color="#333"
      justify="space-between"
      position="relative"
      spacing={["3.5rem", "2.5rem"]}
      role="group"
      onClick={() => {
        dispatch(selectPhone(id));
        handleClick(phone.id);
      }}
      _hover={{ cursor: "pointer" }}
    >
      <Box position="relative">
        <Image
          src={image}
          w="100%"
          h="auto"
          objectFit="cover"
          transition="0.5s ease all"
          _groupHover={{ transform: "scale(1.05)" }}
          fallbackSrc="/placeholder.jpg"
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
        <Box fontSize="3rem">
          <Currency>{price}</Currency>
        </Box>
      </Stack>
    </Stack>
  );
};
