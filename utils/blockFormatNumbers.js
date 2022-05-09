import { addHashKey } from './addHashKey';

const blockFormatNumbers = (obj, hexToNumFn) => {
	const objCopy = addHashKey(obj); //add key to the block obj and create a copy
	const blockNumberKey = objCopy['number'] ? 'number' : 'blockNumber';
	objCopy[blockNumberKey] = hexToNumFn(objCopy[blockNumberKey]);
	objCopy['gasUsed'] = hexToNumFn(objCopy['gasUsed']);
	objCopy['timestamp'] = hexToNumFn(objCopy['timestamp']);
	objCopy['gasPrice'] = hexToNumFn(objCopy['gasPrice']);
	objCopy['gas'] = hexToNumFn(objCopy['gas']);
	objCopy['value'] = hexToNumFn(objCopy['value']);
	objCopy['nonce'] = hexToNumFn(objCopy['nonce']);
	return objCopy;
};

export default blockFormatNumbers;
