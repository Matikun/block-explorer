const fromWeiToEth = (number, web3) => {
	if (!web3) return;
	return web3.utils.fromWei(number, 'ether');
};

export default fromWeiToEth;
