import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import "@fontsource/bebas-neue";

import { PhoneListContainer } from "./components/PhoneListContainer/";

function App() {
  return (
    <Box pb="3rem" minW="320px">
      <Heading
        as="h2"
        bg="#333"
        color="#ccc"
        textTransform="uppercase"
        textAlign="center"
        fontFamily="Bebas Neue"
        fontSize={["3.5rem", "5rem"]}
        py="2rem"
        mb="2rem"
      >
        New Arrivals
      </Heading>
      <Container centerContent maxW="container.xl">
        <Divider mb="2rem" color="black" />
        <PhoneListContainer />
      </Container>
    </Box>
  );
}

export default App;
