import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

/**
 * @description Redux slice for user
 * @version 1.0.0
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
