import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	isPaused: boolean;
};

const initialState: InitialState = {
	isPaused: true,
};

const timerButtonsSlice = createSlice({
	name: 'timerButtons',
	initialState,
	reducers: {
		toggleTimer(state) {
			state.isPaused = !state.isPaused;
		},
	},
});

export const timerButtonsAction = timerButtonsSlice.actions;

export default timerButtonsSlice.reducer;
