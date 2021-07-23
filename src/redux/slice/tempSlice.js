import { createSlice } from '@reduxjs/toolkit';

const tempSlice = createSlice({
	name: 'temperatue',
	initialState: { C: -17.78, F: -32 },
	reducers: {
		celciusToFrenheit: (state, action) => {
			state.C = action.payload * 1.8 + 32;
		},
		farenheitToCelcius: (state, action) => {
			state.F = (action.payload - 32) * 0.5555;
		},
	},
});

export const tempActions = tempSlice.actions;
export default tempSlice.reducer;
