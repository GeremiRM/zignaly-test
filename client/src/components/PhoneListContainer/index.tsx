import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchData,
  selectPhone,
  selectPhones,
} from "../../redux/phones/phoneSlice";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { PhoneCard } from "./PhoneCard";
import { PhoneDetailComponent } from "../PhoneDetailComponent";
import { PhoneListPlaceholder } from "./PhoneListPlaceholder";

export const PhoneListContainer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, status } = useAppSelector(selectPhones);
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
      <PhoneCard phone={phone} key={phone.id} handleClick={handleClick} />
    ));
  };

  // If the data is being fetched or there is no data, display placeholder
  if (status === "loading" || !data) return <PhoneListPlaceholder />;

  return (
    <>
      {/* Phone Modal - Displays the extra information of a phone */}
      <PhoneDetailComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

      {/* Phone Grid - List of all Phones */}
      <Grid
        columnGap="2rem"
        justifyContent="center"
        rowGap={["2.5rem", "5rem", "7rem"]}
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        data-testid="phones"
      >
        {renderPhones()}
      </Grid>
    </>
  );
};
