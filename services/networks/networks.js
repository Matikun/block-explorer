import app from 'config/app';

/* 
 
NETWORK KEYS Numbers are related to the chain ID number

*/

export const NETWORKS = {
	1: 'Ethereum Main Network',
	3: 'Ropsten Test Network',
	4: 'Rinkeby Test Network',
	5: 'Goerli Test Network',
	42: 'Kovan Test Network',
	56: 'Binance Smart Chain Main Network',
	137: 'Polygon Matic Main Net',
	250: 'Fantom Main Net',
	43114: 'Avalanche Main Net',
	1285: 'MoonRiver Main Net',
	1337: 'Ganache',
	1666600000: 'Harmony Main net',
};

export const NETWORK_ID = app.PUBLIC_NETWORK_ID;

export const toHexaDecimalNumber = (number) => Number(number).toString(16);

export const networks = {
	ethereum: {
		chainId: `0x${toHexaDecimalNumber(NETWORK_ID)}`,
	},
};
