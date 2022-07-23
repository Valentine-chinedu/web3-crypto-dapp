import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='flex h-full w-32 flex-col items-center justify-center space-y-8 bg-gray-900 text-gray-100'>
			<Link to='/home'>Home</Link>
			<Link to='/currencies'>Currencies</Link>
			<Link to='/news'>News</Link>
			<Link to='/buy'>Trade</Link>
		</div>
	);
};

export default NavBar;
