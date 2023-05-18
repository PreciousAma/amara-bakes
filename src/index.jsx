import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
	palette: {
		primary: {
			main: '#cD9B33',
		},
		text: {
			primary: '#000000',
			navlink: '#333333',
		},
		background: {
			desertStorm: '#f7f7f7',
			dark: '#22202e',
			black: '#000000',
		},
	},
	typography: {
		fontFamily: "'Lora', serif",
		fontFamily2: "'Kaushan Script', cursive",
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
