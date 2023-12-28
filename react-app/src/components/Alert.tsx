import React, { MouseEvent, ReactNode } from "react";
interface Props {
  children: ReactNode | string;
  type?: "primary" | "secondary" | "danger";
  closeable?: boolean;
  onClose?: (event: MouseEvent) => void;
}
const Alert = ({
  children,
  type = "primary",
  closeable = false,
  onClose,
}: Props) => {
  return (
    <div
      className={`alert alert-${type} ${closeable && "alert-dismissible"}`}
      role="alert"
    >
      {children}
      {closeable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={(event) => {
            onClose && onClose(event);
          }}
        ></button>
      )}
    </div>
  );
};

export default Alert;
