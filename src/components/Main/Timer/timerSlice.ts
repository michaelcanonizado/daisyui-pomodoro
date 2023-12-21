import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	currentTime: number;
	isPaused: boolean;
	isRunning: boolean;
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
	isRunning: false,
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
		setTime(state, action: PayloadAction<{ time: number }>) {
			state.currentTime = action.payload.time;
		},
		decrementTime(state) {
			state.currentTime = state.currentTime - 1;
		},
		toggleTimer(state) {
			state.isRunning = !state.isRunning;
		},
		resetTimer(state, action: PayloadAction<{ time: number }>) {
			state.isRunning = false;
			state.currentTime = action.payload.time;
		},
	},
});

export const timerAction = timerSlice.actions;

export default timerSlice.reducer;
