import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	workDuration: number;
	shortBreakDuration: number;
	longBreakDuration: number;
	rounds: number;
};

const initialState: InitialState = {
	workDuration: 25,
	shortBreakDuration: 5,
	longBreakDuration: 15,
	rounds: 4,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		printSettings(state) {
			console.log(state.workDuration);
		},
	},
});

export const settingsAction = settingsSlice.actions;

export default settingsSlice.reducer;
