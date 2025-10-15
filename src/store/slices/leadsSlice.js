import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLeads(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setLeads } = leadsSlice.actions;
export default leadsSlice.reducer;
