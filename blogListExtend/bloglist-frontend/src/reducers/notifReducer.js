import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
let timeoutId;

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setMessage(state, action) {
      state = action.payload;
      return state;
    },
    removMessage() {
      return null;
    },
  },
});

export const { setMessage, removMessage } = notifSlice.actions;

export const setNotif = (notif, notifType, time) => {
  return async (dispatch) => {
    clearTimeout(timeoutId);
    dispatch(
      setMessage({
        text: notif,
        type: notifType,
      })
    );

    timeoutId = setTimeout(() => {
      dispatch(removMessage());
    }, time * 1000);
  };
};

export default notifSlice.reducer;
