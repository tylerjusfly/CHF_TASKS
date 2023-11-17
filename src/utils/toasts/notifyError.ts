import { CSSProperties } from "react";
import toast from "react-hot-toast";

const toastError: CSSProperties = {
  color: "#fff",
  textAlign: "center",
  backgroundColor: "red",
  letterSpacing: "0.14px",
};

export const notifyError = (message: string) =>
  toast.error(message, {
    position: "top-right",
    style: toastError,
  });
