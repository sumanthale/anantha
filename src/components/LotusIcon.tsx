import React from "react";

interface LotusIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "filled";
}

const LotusIcon: React.FC<LotusIconProps> = ({
  className = "",
  size = "md",
  variant = "outline",
}) => {
  const sizeClasses = {
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
    xl: "h-12",
  };

  const fillClass = variant === "filled" ? "fill-current" : "fill-none";

  return (
    <img
      src="https://anantharehab.com/wp-content/uploads/2025/03/lotus.png"
      alt="lotuc"
      className={`${sizeClasses[size]} ${fillClass} ${className}`}
    />
  );
};

export default LotusIcon;
