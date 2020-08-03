import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  if (!navigationRef.current) {
    return;
  }
  navigationRef.current.navigate(name, params);
};

export default {
  navigate,
};
