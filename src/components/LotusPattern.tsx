import React from "react";
import LotusIcon from "./LotusIcon";

interface LotusPatternProps {
  className?: string;
  count?: number;
  orientation?: "horizontal" | "vertical";
  opacity?: number;
}

const LotusPattern: React.FC<LotusPatternProps> = ({
  className = "",
  count = 5,
  orientation = "horizontal",
  opacity = 0.1,
}) => {
  return (
    <img
      src="https://anantharehab.com/wp-content/uploads/2025/03/bg-pattern.png"
      alt="img"
    />
  );
};

export default LotusPattern;
