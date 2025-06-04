import React from 'react';

interface IconProps {
  className?: string;
}

const MenuIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default MenuIcon;
