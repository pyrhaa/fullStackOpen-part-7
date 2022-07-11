import { createSlice } from "@reduxjs/toolkit";
import usersService from "../services/users";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await usersService.getAll();
    dispatch(getUsers(users));
  };
};

export default usersSlice.reducer;
