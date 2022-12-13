import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import gambar from '../public/hero.jpg';
import { Menu } from './components/Menu';
function App() {
	const [count, setCount] = useState(0);

	return (
		// page menu
		<div>
			<div>
				<Menu />
			</div>
		</div>
	);
}

export default App;
