import { Navigate } from "react-router-dom";

export default function LoveLetterGuard({ children }) {
  const allowed = sessionStorage.getItem("canViewLoveLetter");

  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}
