import { createSlice } from '@reduxjs/toolkit';

import { useAppSelector } from '../../../app/hooks';

import { useTimer } from '../../hooks/useTimer';

type InitialState = {
	isPaused: boolean;
	isResetting: boolean;
};

const initialState: InitialState = {
	isPaused: true,
	isResetting: false,
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
