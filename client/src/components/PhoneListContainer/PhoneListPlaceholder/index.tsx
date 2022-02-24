import { Box, Wrap, Stack } from "@chakra-ui/react";

export const PhoneListPlaceholder: React.FC = () => {
  const CardPlaceholder = () => (
    <Stack spacing={["3.5rem", "2.5rem"]} w="250px">
      <Box position="relative" bg="#eee" h="400px"></Box>
      <Stack>
        <Box bg="#eee" h="2rem" w="100%"></Box>
        <Box bg="#eee" h="2rem" w="100%"></Box>
        <Box bg="#eee" h="2rem" w="100%"></Box>
      </Stack>
    </Stack>
  );

  const renderPlaceholders = () => {
    return [...Array(5)].map((_, idx) => <CardPlaceholder key={idx} />);
  };

  return (
    <Wrap justify="center" spacing="3rem" data-testid="loading">
      {renderPlaceholders()}
    </Wrap>
  );
};
