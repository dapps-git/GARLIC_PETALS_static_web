import React from 'react';

/**
 * 3D Faceted Review Star matching user uploaded star reference
 */
export default function ReviewStar({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Arm 0: Top */}
      <polygon points="50,50 39.9,36.09 50,5" fill="#ffd000" />
      <polygon points="50,50 50,5 60.1,36.09" fill="#e6a800" />

      {/* Arm 1: Right-Top */}
      <polygon points="50,50 60.1,36.09 92.8,36.09" fill="#ffd000" />
      <polygon points="50,50 92.8,36.09 66.35,55.31" fill="#e6a800" />

      {/* Arm 2: Right-Bottom */}
      <polygon points="50,50 66.35,55.31 76.45,86.41" fill="#ffd000" />
      <polygon points="50,50 76.45,86.41 50,67.19" fill="#e6a800" />

      {/* Arm 3: Left-Bottom */}
      <polygon points="50,50 50,67.19 23.55,86.41" fill="#ffd000" />
      <polygon points="50,50 23.55,86.41 33.65,55.31" fill="#e6a800" />

      {/* Arm 4: Left-Top */}
      <polygon points="50,50 33.65,55.31 7.2,36.09" fill="#ffd000" />
      <polygon points="50,50 7.2,36.09 39.9,36.09" fill="#e6a800" />
    </svg>
  );
}

