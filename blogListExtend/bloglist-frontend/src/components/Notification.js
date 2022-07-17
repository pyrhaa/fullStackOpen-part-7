import React from "react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification === null) {
    return null;
  }

  if (notification.type === "success") {
    return (
      <Alert id="success" severity="success">
        {notification.text}
      </Alert>
    );
  } else {
    return (
      <Alert id="error" severity="error">
        {notification.text}
      </Alert>
    );
  }
};

export default Notification;
