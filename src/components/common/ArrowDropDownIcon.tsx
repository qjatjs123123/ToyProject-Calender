import React from 'react';

interface ArrowDropDownIconProps {
  className?: string;
  ariaLabel?: string;
}

const ArrowDropDownIcon: React.FC<ArrowDropDownIconProps> = ({
  className,
  ariaLabel = 'arrow drop down icon',
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    fill="currentColor"
    role="img"
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

export default ArrowDropDownIcon;
