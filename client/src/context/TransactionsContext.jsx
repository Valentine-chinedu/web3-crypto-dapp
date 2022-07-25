import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionsContract = new ethers.Contract(
		contractAddress,
		contractABI,
		signer
	);

	return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
	const [formData, setformData] = useState({
		addressTo: '',
		amount: '',
		keyword: '',
		message: '',
	});
	const [currentAccount, setCurrentAccount] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [transactionCount, setTransactionCount] = useState(
		localStorage.getItem('transactionCount')
	);
	const [transactions, setTransactions] = useState([]);
};
