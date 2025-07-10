import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import useBlog from "../store/Blog.store";

type RestrictedProps = {
  children: ReactNode;
};

function Restricted({ children }: RestrictedProps) {
  const { token } = useBlog();
  if (!token) {
    return <Navigate to={"/"} replace />;
  }
  return <>{children}</>;
}

export default Restricted;
