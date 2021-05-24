import * as React from "react";

function SvgAThin(props) {
  return (
    <svg
      width={22}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.22 17.75H5.034l-2.288 5.606H.515L9.897.473h2.46l9.382 22.883h-2.174l-2.345-5.607zM5.606 15.976h10.927L11.098 2.418 5.606 15.976z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAThin;
