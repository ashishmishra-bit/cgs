import React, { useState } from "react";

const Options = ({ tech_stack_name, setFilterValue, filterValue }) => {
  const [isActive, setIsActive] = useState(0);
  const activeHandler = () => {
    if (filterValue == tech_stack_name) {
      setFilterValue("");
      return;
    }
    setFilterValue(tech_stack_name);
  };
  return (
    <li
      style={{
        marginRight: "0.5rem",
        cursor: "pointer",
      }}
    >
      <a
        onClick={activeHandler}
        style={{
          background: filterValue == tech_stack_name ? "#0450DA" : "white",
          color: filterValue == tech_stack_name ? "white" : "blue",
        }}
      >
        {tech_stack_name}
      </a>
      <style jsx>
        {`
          .active {
            color: "white";
            background: "red";
          }
        `}
      </style>
    </li>
  );
};

export default Options;
