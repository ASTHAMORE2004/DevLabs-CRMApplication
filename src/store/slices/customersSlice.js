import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setCustomers } = customersSlice.actions;
export default customersSlice.reducer;
