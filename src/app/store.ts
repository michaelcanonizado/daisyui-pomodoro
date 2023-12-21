import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './../components/Sidebar/themeSlice';
import timerReducer from '../components/Main/Timer/timerSlice';

const store = configureStore({
	reducer: {
		timer: timerReducer,
		theme: themeReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
