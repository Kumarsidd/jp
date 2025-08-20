import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  menuItems: [], // Example: [{ route: "/dashboard", permissions: ["view", "edit"] }]
  isLoading: false,
  error: null,
};

// Menu slice
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenuStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchMenuSuccess(state, action) {
      state.menuItems = action.payload;
      state.isLoading = false;
    },
    fetchMenuFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    checkRouteAvailability(state, action) {
      const routeExists = state.menuItems.some(item => item.route === action.payload);
      return routeExists;
    },
  },
});

// Export actions
export const { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure } = menuSlice.actions;

// Helper function to check route availability
export const isRouteAvailable = (state, route) => {
  return state.menu.menuItems.some(item => item.route === route);
};



// Export reducer
export default menuSlice.reducer;
