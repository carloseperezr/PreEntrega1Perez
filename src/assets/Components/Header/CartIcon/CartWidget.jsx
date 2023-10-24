import React from "react";

export const CartWidget = () => {
  return (
    <div className="flex">
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14v12m-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3Z"
        ></path>
      </svg>
      <small
        className="bg-blue-500 w-5 h-5 
        rounded-3xl text-center -ml-3"
      >
        2
      </small>
    </div>
  );
};
