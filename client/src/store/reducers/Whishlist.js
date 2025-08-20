import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from '@/services/api';
import { toast } from 'react-toastify';

// Thunk to fetch wishlist
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (_, { rejectWithValue }) => {
    try {
      const res = (await get('/whishlist')).data.data;
      return Array.isArray(res) ? res : [];
    } catch (error) {
      if (error.response?.data?.error === 'Failed to find cv!') {
        toast.info('Please fill the information to get going!');
      }
      return rejectWithValue(error.response?.data?.error || 'Error fetching wishlist');
    }
  }
);


// Thunk to add an item to the wishlist
export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async ({ id, operation }, { rejectWithValue, dispatch }) => {
    try {
      const res = await post('/whishlist', { id, operation });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(fetchWishlist()); // Refetch wishlist after successful mutation
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Error adding to wishlist');
      return rejectWithValue(err.response?.data?.error || 'Error adding to wishlist');
    }
  }
);

// Wishlist slice
const SavedJobslice = createSlice({
  name: 'wishlist',
  initialState: {
    SavedJobs: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchWishlist states
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.SavedJobs = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.SavedJobs = [];
      });
    // Handle addToWishlist states
   
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const wishlistReducer = SavedJobslice.reducer;

// Selectors
export const selectWishlist = (state) => state.wishlist.SavedJobs;
export const selectWishlistLoading = (state) => state.wishlist.isLoading;
export const selectWishlistError = (state) => state.wishlist.error;

