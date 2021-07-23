import { configureStore } from '@reduxjs/toolkit';
import tempSlice from '../slice/tempSlice';

const store = configureStore({
	reducer: {
		temp: tempSlice,
	},
});

export default store;
