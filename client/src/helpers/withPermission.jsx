// Higher-order component for permissions
import React from "react";
import { useSelector } from "react-redux";

export const withPermission = (WrappedComponent, requiredPermission) => {
  return (props) => {
    const menuItems = useSelector((state) => state.menu.menuItems);

    // Check permissions
    const hasPermission = menuItems.some(item =>
      item.permissions?.includes(requiredPermission)
    );

    if (!hasPermission) {
      return <div>You do not have permission to access this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};