import React from 'react';
import { Transaction, TransactionHistory } from '../components';

const SendCrypto = () => {
	return (
		<div className='flex h-full w-full flex-col items-center pt-16'>
			{/* <Services /> */}
			<Transaction />
			<TransactionHistory />
		</div>
	);
};

export default SendCrypto;
