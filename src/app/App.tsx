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

// 8609b6d5da4dbcb320d342358b3d7b85
export default App;
