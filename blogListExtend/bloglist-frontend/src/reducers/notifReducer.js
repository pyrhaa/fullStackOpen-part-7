import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
let timeoutId;

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    newNotif(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { newNotif } = notifSlice.actions;

export const notifChange = (notif, time) => {
  return async (dispatch) => {
    clearTimeout(timeoutId);
    dispatch(newNotif(notif));

    timeoutId = setTimeout(() => {
      dispatch(newNotif(initialState));
    }, time * 1000);
  };
};

export default notifSlice.reducer;
