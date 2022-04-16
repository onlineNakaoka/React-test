import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fonsSize: "16p"
  };
  return <p style={contentStyle}>{children}</p>;
};
