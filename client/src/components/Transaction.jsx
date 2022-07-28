import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionsContext';
import FormInput from './FormInput';

const Transaction = () => {
	const {
		currentAccount,
		connectWallet,
		handleChange,
		sendTransaction,
		formData,
		isLoading,
	} = useContext(TransactionContext);

	const handleSubmit = (e) => {
		const { addressTo, amount, keyword, message } = formData;

		e.preventDefault();

		if (!addressTo || !amount || !keyword || !message) return;

		sendTransaction();
	};

	return (
		<div className='flex flex-col items-center space-y-8 rounded-lg bg-white p-14 shadow-lg shadow-gray-300'>
			<h1 className='text-xl font-bold text-blue-500'>Send Crypto</h1>
			<div className='flex h-full w-full flex-col flex-wrap items-center justify-center space-y-8'>
				<FormInput
					placeholder='Address To'
					name='addressTo'
					type='text'
					handleChange={handleChange}
				/>
				<FormInput
					placeholder='Amount (ETH)'
					name='amount'
					type='number'
					handleChange={handleChange}
				/>
				<FormInput
					placeholder='Keyword'
					name='keyword'
					type='text'
					handleChange={handleChange}
				/>
				<FormInput
					placeholder='Enter Message'
					name='message'
					type='text'
					handleChange={handleChange}
				/>

				<div className='space-x-4'>
					{!currentAccount && (
						<button
							type='button'
							onClick={connectWallet}
							className='rounded bg-blue-500 py-1.5 px-4 text-sm text-gray-100'
						>
							Connect Wallet
						</button>
					)}

					{isLoading ? (
						<svg
							className='animate-spin'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z'
								fill='#133fd1'
							/>
						</svg>
					) : (
						<button
							className='rounded bg-blue-500 py-1.5 px-12 text-sm text-gray-100'
							type='button'
							onClick={handleSubmit}
						>
							Send
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Transaction;
