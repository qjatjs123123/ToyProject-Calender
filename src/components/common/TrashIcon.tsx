import React from "react";

interface TrashIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={className}
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7h12M9 7v10m3-10v10m3-10v10M4 7h16M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
      />
    </svg>
  );
};

export default TrashIcon;
