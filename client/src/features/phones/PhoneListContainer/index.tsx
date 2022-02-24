import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchData, selectPhone, selectPhones } from "../phoneSlice";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { PhoneCardComponent } from "./PhoneCardComponent";
import { PhoneDetailComponent } from "../PhoneDetailComponent";

export const PhoneListContainer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useAppSelector(selectPhones);
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    dispatch(selectPhone(id));
    onOpen();
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderPhones = () => {
    return data.map((phone) => (
      <PhoneCardComponent
        phone={phone}
        key={phone.id}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <>
      <PhoneDetailComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Grid
        columnGap="2rem"
        justifyContent="center"
        rowGap={["2.5rem", "5rem", "7rem"]}
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        {renderPhones()}
      </Grid>
    </>
  );
};
