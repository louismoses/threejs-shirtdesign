import React from "react";
import state from "../store";

const CustomeButton = ({ title, type, customStyle, handleClick }) => {
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 rounded-md ${customStyle} style={generateStyle(type)} `}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
