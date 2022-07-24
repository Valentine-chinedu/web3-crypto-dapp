const main = async () => {
	const transactionFactory = await hre.ethers.getContractFactory(
		'Transactions'
	);
	const transactionsContract = await transactionFactory.deploy();

	await transactionsContract.deploy();

	console.log('Transaction address: ', transactionsContract.address);
};
