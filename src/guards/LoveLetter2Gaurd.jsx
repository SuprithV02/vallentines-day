import { Navigate } from "react-router-dom";

export default function LoveLetter2Guard({ children }) {
  const allowed = sessionStorage.getItem("canViewLoveLetter2");

  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}
