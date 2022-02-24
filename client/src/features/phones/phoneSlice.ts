import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../state/store";

import { Phone } from "../../types/phone";

export interface PhoneState {
  data: Phone[];
  selectedPhone: Phone | undefined;
  status: "idle" | "loading" | "failed";
}

const initialState: PhoneState = {
  data: [],
  selectedPhone: undefined,
  status: "idle",
};

export const fetchData = createAsyncThunk("phones/fetchData", async () => {
  const { data } = await axios({
    method: "get",
    url: "/phones",
    baseURL: "http://localhost:4000",
  });

  return data;
});

export const phoneSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {
    selectPhone: (state, action: PayloadAction<number | undefined>) => {
      state.selectedPhone = state.data.find(
        (phone) => phone.id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const { selectPhone } = phoneSlice.actions;

export const selectPhones = (state: RootState) => state.phones;

export default phoneSlice.reducer;
