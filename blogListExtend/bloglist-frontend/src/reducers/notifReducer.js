// import { createSlice } from "@reduxjs/toolkit";

// const initialState = null;
// let timeoutId;

// const notifSlice = createSlice({
//   name: "notif",
//   initialState,
//   reducers: {
//     newNotif(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { newNotif } = notifSlice.actions;

// export const notifChange = (notif, notifType, time) => {
//   return async (dispatch) => {
//     clearTimeout(timeoutId);
//     dispatch(
//       newNotif({
//         message: notif,
//         type: notifType,
//       })
//     );

//     timeoutId = setTimeout(() => {
//       dispatch(newNotif(initialState));
//     }, time * 1000);
//   };
// };

// export default notifSlice.reducer;

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.data;
    case "HIDE_NOTIFICATION":
      return action.data;
    default:
      return state;
  }
};

export const setNotification = (
  notification,
  notificationType,
  displayTime
) => {
  return async (dispatch) => {
    dispatch({
      type: "NEW_NOTIFICATION",
      data: {
        message: notification,
        type: notificationType,
      },
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
        data: null,
      });
    }, displayTime * 1000);
  };
};

export default notificationReducer;
