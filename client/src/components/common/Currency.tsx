import { Text } from "@chakra-ui/react";

export const Currency: React.FC = ({ children }) => {
  return <Text fontFamily="inherit">${children}.00</Text>;
};
