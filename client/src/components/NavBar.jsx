import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionsContext';

const NavBar = () => {
	const { currentAccount } = useContext(TransactionContext);
	return (
		<div className='flex h-14 w-full items-center justify-around bg-gray-600 text-gray-100'>
			<div>
				{!currentAccount ? (
					<p>Account not connected</p>
				) : (
					<div className='flex space-x-2'>
						<p>Account connected</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
								fill='rgba(47,204,113,1)'
							/>
						</svg>
					</div>
				)}
			</div>
			<div className='flex space-x-8'>
				<h1>Home</h1>
				<h1>Currencies</h1>
				<h1>News</h1>
				<h1>Send Crypto</h1>
			</div>
		</div>
	);
};

export default NavBar;
