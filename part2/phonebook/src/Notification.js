import React from "react";
import "./index.css";

const Notification = ({ message }) => {
  if (message == null) {
    return null;
  }

  if (message.type === "ERROR") {
    return <div className="error">{message.content}</div>;
  } else {
    return <div className="win">{message.content}</div>;
  }
};

export default Notification;
