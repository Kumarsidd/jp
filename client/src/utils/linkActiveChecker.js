// is active parent check
export const isActiveParent = (data = [], path) => {
  if (data?.length !== 0) {
    return data?.some(({ items }) =>
      items?.some(
        (menu) =>
          menu.routePath?.split("/")[1]?.replace(/\/\d+/, "") ===
          path?.split("/")[1]?.replace(/\/\d+/, "")
      )
    );
  }
};

// is active parent childe check
export const isActiveParentChaild = (data = [], path) => {
  if (data?.length !== 0) {
    return data?.some(
      (menu) =>
        menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")
    );
  }
};

// is active link check
export const isActiveLink = (menuPath, routePath) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
  }
};

// is active link child
export const isActiveChild = (data = [], path) => {
  const exists = data?.filter(item => item.routePath === path);
  return exists.length > 0 ? true : false;
}
export const isActiveHeader = (link, path) => {
  return  path===link
  
}