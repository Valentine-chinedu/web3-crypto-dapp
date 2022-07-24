const main = async () => {
	const transactionFactory = await hre.ethers.getContractFactory(
		'Transactions'
	);
	const transactionsContract = await transactionFactory.deploy();

	await transactionsContract.deploy();

	console.log('Transaction address: ', transactionsContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

runMain();
