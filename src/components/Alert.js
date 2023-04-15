import React from "react";
import "../styles/alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;

  const className = `alert alert-${success ? "success" : "error"}`;

  return <div className={className}>{message}</div>;
};

export default Alert;
