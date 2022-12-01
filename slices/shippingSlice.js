import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shipping: [],
};

export const shippingSlice = createSlice({
  name: 'shippingdetails',
  initialState,
  reducers: {
    addToShipping: (state, action) => {
      state.shipping = action.payload;
    },
  },
});

export const { addToShipping } = shippingSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectShipping = (state) => state.shippingdetails.shipping;

export default shippingSlice.reducer;
