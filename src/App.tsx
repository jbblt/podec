import './App.css';
import ResponsiveAppBar from './components/navBar/NavBar';
import {Outlet} from 'react-router-dom';

function App() {
	return (
		<>
			<ResponsiveAppBar />
			<div style={{margin: 20}}>
				<Outlet />
			</div>
		</>
	);
}

export default App;
