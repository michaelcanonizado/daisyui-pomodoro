import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	currentTime: number;
	isPaused: boolean;
	isResetting: boolean;
	settings: {
		workDuration: number;
		shortBreakDuration: number;
		longBreakDuration: number;
		rounds: number;
	};
};

const initialState: InitialState = {
	currentTime: 25,
	isPaused: true,
	isResetting: false,
	settings: {
		workDuration: 25,
		shortBreakDuration: 5,
		longBreakDuration: 15,
		rounds: 4,
	},
};

const timerSlice = createSlice({
	name: 'timerButtons',
	initialState,
	reducers: {
		toggleTimer(state) {
			state.isPaused = !state.isPaused;
		},
		resetTimer(state) {
			state.isResetting = !state.isResetting;
		},
	},
});

export const timerAction = timerSlice.actions;

export default timerSlice.reducer;
