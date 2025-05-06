import React from 'react';

interface IconAirplaneReturnProps {
  className?: string;
}

const IconAirplaneReturn: React.FC<IconAirplaneReturnProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    className={className}
  >
    <path
      d="M0.5 21V19H18.5V21H0.5ZM16.05 15.95L0.5 11.525V4.25005L2.9 4.92505L4.1 8.40005L7.55 9.37505L6.675 0.800049L9.55 1.65005L12.75 10.875L17.05 12.1C17.4667 12.2334 17.8125 12.475 18.0875 12.825C18.3625 13.175 18.5 13.575 18.5 14.025C18.5 14.6084 18.2625 15.1209 17.7875 15.5625C17.3125 16.0042 16.7333 16.1334 16.05 15.95Z"
      fill="#6A6A6A"
    />
  </svg>
);

export default IconAirplaneReturn;
