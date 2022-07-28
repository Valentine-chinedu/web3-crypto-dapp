import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionsContext';

import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionsCard = ({
	addressTo,
	addressFrom,
	timestamp,
	message,
	keyword,
	amount,
	url,
}) => {
	return (
		<div className='m-4 flex min-w-full flex-1 flex-col rounded-md bg-blue-600 p-3 hover:shadow-2xl sm:min-w-[270px] sm:max-w-[300px]'>
			<div className='mt-3 flex w-full flex-col items-center'>
				<div className='display-flex mb-6 w-full justify-start p-2'>
					<a
						href={`https://ropsten.etherscan.io/address/${addressFrom}`}
						target='_blank'
						rel='noreferrer'
					>
						<p className='text-base text-white'>
							From: {shortenAddress(addressFrom)}
						</p>
					</a>
					<a
						href={`https://ropsten.etherscan.io/address/${addressTo}`}
						target='_blank'
						rel='noreferrer'
					>
						<p className='text-base text-white'>
							To: {shortenAddress(addressTo)}
						</p>
					</a>
					<p className='text-base text-white'>Amount: {amount} ETH</p>
					{message && (
						<p className='text-base text-white'>Message: {message}</p>
					)}
				</div>

				<div className='-mt-5 w-max rounded-3xl bg-gray-100 p-3 px-5 shadow-2xl'>
					<p className='font-bold text-blue-600'>{timestamp}</p>
				</div>
			</div>
		</div>
	);
};

const TransactionHistory = () => {
	const { transactions, currentAccount } = useContext(TransactionContext);

	return (
		<div className='flex w-full items-center justify-center '>
			<div className='flex flex-col py-12 px-4 md:p-12'>
				{currentAccount ? (
					<h3 className='my-2 text-center text-3xl text-blue-600'>
						Latest Transactions
					</h3>
				) : (
					<h3 className='my-2 text-center text-3xl text-blue-600'>
						Connect your account to see the latest transactions
					</h3>
				)}

				<div className=' flex flex-wrap items-center justify-center'>
					{[...dummyData, ...transactions].reverse().map((transaction, i) => (
						<TransactionsCard key={i} {...transaction} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TransactionHistory;
