import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchData, selectPhones } from "../phoneSlice";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { PhoneCardComponent } from "./PhoneCardComponent";

export const PhoneListContainer: React.FC = () => {
  const { data } = useAppSelector(selectPhones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderPhones = () => {
    return data.map((phone) => (
      <PhoneCardComponent phone={phone} key={phone.id} />
    ));
  };

  return (
    <Grid
      columnGap="2rem"
      justifyContent="center"
      rowGap={["2.5rem", "5rem", "7rem"]}
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
    >
      {renderPhones()}
    </Grid>
  );
};
