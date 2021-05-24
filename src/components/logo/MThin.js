import * as React from "react";

function SvgMThin(props) {
  return (
    <svg
      width={22}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.57 3.104l-8.353 20.31h-.743l-8.41-20.31v20.31H.119V.53h2.918l7.78 18.993L18.597.53h2.975v22.883H19.57V3.104z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMThin;
