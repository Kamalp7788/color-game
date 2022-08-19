import {createSlice} from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    resetList: state => {
      state.count = 0;
    },
  },
});

export const {increment, resetList} = CounterSlice.actions;

export default CounterSlice.reducer;
