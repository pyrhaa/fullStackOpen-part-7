import React from "react";
import { useSelector } from "react-redux";

const error = {
  color: "red",
  border: "4px solid red",
  background: "lightgrey",
  fontSize: 20,
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const success = {
  color: "green",
  border: "4px solid green",
  background: "lightgrey",
  fontSize: 20,
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification === null) {
    return null;
  }

  if (notification.type === "success") {
    return (
      <div id="success" style={success}>
        {notification}
      </div>
    );
  } else {
    return (
      <div>
        <div id="error" style={error}>
          {notification}
        </div>
      </div>
    );
  }
};

export default Notification;
