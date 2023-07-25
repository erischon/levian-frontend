import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
};

const userSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setLoggedUser } = userSlice.actions;

export default userSlice.reducer;
