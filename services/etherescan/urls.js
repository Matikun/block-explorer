import app from 'config/app';

export const URL_ETH_PRICE =
	'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

export const getLastBlockNumberUrl = () => {
	const url = `${app.NEXT_ETHERSCAN_BASE_URL}?module=proxy&action=eth_blockNumber&apikey=${app.NEXT_API_KEY_ETHERSCAN}`;
	return url;
};

export const getTransactionHashUrl = ({ txHash }) => {
	const url = `${app.NEXT_ETHERSCAN_BASE_URL}?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${app.NEXT_API_KEY_ETHERSCAN}`;
	return url;
};

export const getLastBlockrUrl = ({ blockNumber }) => {
	const url = `${app.NEXT_ETHERSCAN_BASE_URL}?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true&apikey=${app.NEXT_API_KEY_ETHERSCAN}`;
	return url;
};

export const getTransactionsByAddressUrl = (address) => {
	return `${app.NEXT_ETHERSCAN_BASE_URL}?module=account&action=txlist&address=${address}&endblock=99999999&offset=999&sort=asc&apikey=${app.NEXT_API_KEY_ETHERSCAN}`;
};
