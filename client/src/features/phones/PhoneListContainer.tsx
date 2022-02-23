import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { fetchData, selectPhones } from "./phoneSlice";

export const PhoneListContainer: React.FC = () => {
  const { data } = useAppSelector(selectPhones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div>
        {data.map((phone) => (
          <h1>{phone.model}</h1>
        ))}
      </div>
    </div>
  );
};
