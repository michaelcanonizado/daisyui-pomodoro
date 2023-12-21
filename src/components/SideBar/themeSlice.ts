import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	currentTheme: string;
	themes: string[];
};

const initialState: InitialState = {
	currentTheme: 'retro',
	themes: [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset',
	],
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction) {
			// state.currentTheme = action.payload.theme;
		},
	},
});

export const themesAction = themeSlice.actions;

export default themeSlice.reducer;
