import { memo } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.css';

const App = memo(() => {
	return (
		<>
			<Navbar></Navbar>
			<main>
				<Outlet></Outlet>
			</main>
		</>
	);
});

export default App;
