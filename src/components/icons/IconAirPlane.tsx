import React from 'react';

interface IconAirplaneProps {
  className?: string;
}

const IconAirplane: React.FC<IconAirplaneProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 19"
    fill="none"
    className={className}
  >
    <path
      d="M2.5 19.0001V17.0001H20.5V19.0001H2.5ZM4.25 14.0001L0.5 7.7501L2.9 7.1001L5.7 9.4501L9.2 8.5251L4.025 1.6251L6.925 0.850098L14.4 7.1251L18.65 5.9751C19.1833 5.8251 19.6875 5.8876 20.1625 6.1626C20.6375 6.4376 20.95 6.84176 21.1 7.3751C21.25 7.90843 21.1875 8.4126 20.9125 8.8876C20.6375 9.3626 20.2333 9.6751 19.7 9.8251L4.25 14.0001Z"
      fill="#6A6A6A"
    />
  </svg>
);

export default IconAirplane;
