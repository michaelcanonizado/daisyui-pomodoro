import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './../components/Sidebar/themeSlice';
import settingsReducer from './../components/Main/Settings/settingsSlice';
import timerReducer from '../components/Main/Timer/timerSlice';

const store = configureStore({
	reducer: {
		settings: settingsReducer,
		timer: timerReducer,
		theme: themeReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
