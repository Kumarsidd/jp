import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const getDisplayName = (userInfo) => {
    const userType = userInfo?.userType?.name?.toLowerCase();
    if (!userInfo?.userTypeValue) return "My account";
  
    switch (userType) {
      case "employer":
        return userInfo.userTypeValue.business_name
          ? capitalizeFirstLetter(userInfo.userTypeValue.business_name)
          : "My account";
      case "candidate":
        return userInfo.userTypeValue.name
          ? capitalizeFirstLetter(userInfo.userTypeValue.name.split(" ")[1])
          : "My account";
      case "subemployer":
        return userInfo.userTypeValue.name
          ? capitalizeFirstLetter(userInfo.userTypeValue.name.split(" ")[0])
          : "My account";
      default:
        return "My account";
    }
  };