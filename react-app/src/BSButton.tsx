import React, { MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode | string;
  type?: "primary" | "secondary" | "danger" | "success";
  onClick: (event: MouseEvent) => void;
}

const BSButton = ({ children, type="primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${type}`}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
};

export default BSButton;
