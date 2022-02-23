import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../state/store";

import { Phone } from "../../types/phone";

export interface PhoneState {
  data: Phone[];
  status: "idle" | "loading" | "failed";
}

const initialState: PhoneState = {
  data: [],
  status: "idle",
};

export const fetchData = createAsyncThunk("phones/fetchData", async () => {
  const { data } = await axios({
    method: "get",
    url: "/phones",
    baseURL: "http://192.168.5.3:4000",
  });

  return data;
});

export const phoneSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
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

export const selectPhones = (state: RootState) => state.phones;

export default phoneSlice.reducer;
