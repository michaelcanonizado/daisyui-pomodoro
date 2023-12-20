import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './../components/Main/Settings/settingsSlice';
import timerButtonsReducer from './../components/Main/Timer/timerButtonsSlice';
const store = configureStore({
	reducer: {
		settings: settingsReducer,
		timer: timerButtonsReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
