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
  },
});

export const {increment} = CounterSlice.actions;

export default CounterSlice.reducer;
