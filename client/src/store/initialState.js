let deData = sessionStorage.getItem("userInfo");

export const authState = {
    isAuthenticated: deData ? true : null,
    user: deData ? deData : {},
};