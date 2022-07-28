import NavBar from './components/NavBar';
import SendCrypto from './pages/SendCrypto';

function App() {
	return (
		<div className='h-full w-full bg-gray-100'>
			<NavBar />
			<SendCrypto />
		</div>
	);
}

export default App;
