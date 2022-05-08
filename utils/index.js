import { networks } from '@services/networks/networks';

export const goToMetamask = () => window.open('https://metamask.io/download/', '_blank');

export const changeNetwork = async (networkName, provider) => {
	try {
		if (!provider) throw new Error('no wallet found');
		await provider.request({
			method: 'wallet_switchEthereumChain',
			params: [{ ...networks[networkName] }],
		});
	} catch (error) {
		console.log(error);
	}
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const addKey = (obj) => ({ ...obj, key: obj.hash });

export const arrObjAddKey = (arr) => arr.map(addKey);

export const blockFormtNumbers = (obj, hexToNumFn) => {
	const objCopy = addKey(obj); //add key to the block obj and create a copy
	const blockNumberKey = objCopy['number'] ? 'number' : 'blockNumber';
	objCopy[blockNumberKey] = hexToNumFn(objCopy[blockNumberKey]);
	objCopy['gasUsed'] = hexToNumFn(objCopy['gasUsed']);
	objCopy['timestamp'] = hexToNumFn(objCopy['timestamp']);
	objCopy['gasPrice'] = hexToNumFn(objCopy['gasPrice']);
	objCopy['gas'] = hexToNumFn(objCopy['gas']);
	objCopy['value'] = hexToNumFn(objCopy['value']);

	return objCopy;
};
