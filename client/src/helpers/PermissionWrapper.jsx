import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PermissionWrapper = ({ permission, children }) => {
  const menuItems = useSelector((state) => state.menu.menuItems);
  const { pathname } = useLocation();

  // Find the matching menu item for the current route
  const currentMenuItem = menuItems.find(item => 
    pathname.startsWith(item.routePath) 
  );

  // Check if the permission exists and is true for the current route
  const hasPermission = currentMenuItem?.permissions?.[permission] ?? false;

  // For debugging
  console.log({
    currentPath: pathname,
    matchedItem: currentMenuItem,
    requiredPermission: permission,
    permissionGranted: hasPermission
  });

  // Return null if no permission
  if (!hasPermission) {
    return null;
  }

  // Return children if has permission
  return <>{children}</>;
};
const PermissionWrapwithkey = ({ key="",permission, children }) => {
  const menuItems = useSelector((state) => state.menu.menuItems);
  const { pathname } = useLocation();
  // Find the matching menu item for the current route
  const currentMenuItem = menuItems.find(item => 
    item.key===key
  );

  // Check if the permission exists and is true for the current route
  const hasPermission = currentMenuItem?.permissions?.[permission] ?? false;

  // For debugging
  console.log({
    currentPath: pathname,
    matchedItem: currentMenuItem,
    requiredPermission: permission,
    permissionGranted: hasPermission
  });

  // Return null if no permission
  if (!hasPermission) {
    return null;
  }

  // Return children if has permission
  return <>{children}</>;
};

export default PermissionWrapper;