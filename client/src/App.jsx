import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BuySell from './pages/trade/BuySell';
import CryptoCurrencies from './pages/Crypto_currencies';
import Home from './pages/Home';
import News from './pages/News';

function App() {
	return (
		<div className='flex h-screen w-full'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/currencies' element={<CryptoCurrencies />} />
				<Route path='/news' element={<News />} />
				<Route path='/buy' element={<BuySell />} />
			</Routes>
		</div>
	);
}

export default App;
