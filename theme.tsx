import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
	shadows: Array(25).fill('none') as any,
	palette: {
		mode: 'light',
		text: {
			primary: '#2c3a42',
		},
		primary: {
			main: '#2c3a42',
		},
		secondary: {
			main: '#ff6600',
		},
		background: {
			default: '#e7f5f5',
			paper: '#f7fdfd',
		},
	},
	typography: {
		fontFamily: 'Geist-Regular',
	},
});

export const darkTheme = createTheme({
	shadows: Array(25).fill('none') as any,
	palette: {
		mode: 'dark',
		text: {
			primary: '#e0e0e0',
		},
		primary: {
			main: '#90caf9',
		},
		secondary: {
			main: '#ff9800',
		},
		background: {
			default: '#121212',
			paper: '#191A1E',
		},
	},
	typography: {
		fontFamily: 'Geist-Regular',
	},
});