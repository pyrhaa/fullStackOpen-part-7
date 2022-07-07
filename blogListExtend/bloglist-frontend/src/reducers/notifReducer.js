import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
let timeoutId;

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    newNotif(state, action) {
      return action.payload;
    },
  },
});

export const { newNotif } = notifSlice.actions;

export const notifChange = (notif, notifType, time) => {
  return async (dispatch) => {
    clearTimeout(timeoutId);
    dispatch(
      newNotif({
        message: notif,
        type: notifType,
      })
    );

    timeoutId = setTimeout(() => {
      dispatch(newNotif(initialState));
    }, time * 1000);
  };
};

export default notifSlice.reducer;
