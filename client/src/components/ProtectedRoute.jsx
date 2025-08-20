import { decrypt } from "@/lib/encrypt";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ 
    children, 
    requiredRole 
  }) => {
    const userInfo = sessionStorage.getItem("userInfo") ? JSON.parse(decrypt(sessionStorage.getItem("userInfo")))?.userType?.name?.toLowerCase() : null;
    return userInfo === requiredRole ? (
      <>{children}</>
    ) :
    !userInfo?
    (
      <Navigate to={'/login'} replace />
    ):
    (
      <Navigate to={'/unauthorized'} replace />
    );
  };

  export default ProtectedRoute