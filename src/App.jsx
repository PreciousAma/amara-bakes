import React from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { NavBar } from './components/NavBar';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
		</div>
	);
}

export default App;
