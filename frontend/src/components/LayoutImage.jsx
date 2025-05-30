// components/Layout.js
import React from "react";

const LayoutImage = ({ children, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
        // backgroundColor: "gray",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
};

export default LayoutImage;
