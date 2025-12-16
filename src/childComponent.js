import React, { useContext } from "react";
import { ThemeContext } from "./App";

const ChildComponent = () => {
  const theme = useContext(ThemeContext);

  console.log("Child component rendered");

  return <p style={{
        fontWeight: "bold"
      }}>Change theme: {theme}</p>;
};

export default React.memo(ChildComponent);
